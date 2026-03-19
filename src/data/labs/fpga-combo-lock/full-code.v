`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 12/07/2023 06:08:42 PM
// Design Name: 
// Module Name: Combination_Control
// Project Name: 
// Target Devices: 
// Tool Versions: 
// Description: 
// 
// Dependencies: 
// 
// Revision:
// Revision 0.01 - File Created
// Additional Comments:
// 
//////////////////////////////////////////////////////////////////////////////////


module Combination_Control(
		input[5:0] game_clock,
		input game_start_flag,
		input system_clock,
		input system_reset,

		output[11:0] current_lock_combination
	);

	reg[11:0] new_lock_combination_reg;	
	wire[11:0] random_lock_combination;
	wire[3:0] to_random_combo_control;
	
	Randomization_Control Randomizer(
	   .clock(system_clock),
	   .reset_internal_reg(system_reset),
        
       .randomization_factors(to_random_combo_control)
	);

	Combination_Generator RandomCombo(
		.randomization_factors(to_random_combo_control),
		.clock(system_clock),
		.reset_internal_reg(system_reset),

		.lock_combination(random_lock_combination)
	);
	
	always @(posedge system_clock)
	   begin
	       if(system_reset)
	           new_lock_combination_reg = 12'b0;
	       else if(game_start_flag == 1'b1 & (game_clock == 6'b000000))
	           begin
	               new_lock_combination_reg <= random_lock_combination;
	           end
	   end
	
//	always @(game_start_flag)
//	   begin
//	       new_lock_combination_reg <= random_lock_combination;
//	   end

//	always @(game_clock)
//		begin
//			if(game_clock == 6'b000000)
//				new_lock_combination_reg <= random_lock_combination;
//		end

	assign current_lock_combination = new_lock_combination_reg;
endmodule

`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 12/07/2023 06:06:41 PM
// Design Name: 
// Module Name: Combination_Generator
// Project Name: 
// Target Devices: 
// Tool Versions: 
// Description: 
// 
// Dependencies: 
// 
// Revision:
// Revision 0.01 - File Created
// Additional Comments:
// 
//////////////////////////////////////////////////////////////////////////////////


module Combination_Generator(
		input[3:0] randomization_factors,
		input clock,
		input reset_internal_reg,

		output[11:0] lock_combination
	);

	wire[11:0] lock_combo_bus;
	wire rng_always_enabled;
	assign rng_always_enabled = 1'b1;

	RNG_0_TO_F RandomDigit1(
		.clock(clock),
		.enable(rng_always_enabled),
		.reset(reset_internal_reg),
		.count_direction(randomization_factors[0]),
		.shift_or_rotate(randomization_factors[1]),
		.number_of_shifts_or_rotations(randomization_factors[3:2]),

		.random_number_out(lock_combo_bus[3:0])
	);

	RNG_0_TO_F RandomDigit2(
		.clock(clock),
		.enable(rng_always_enabled),
		.reset(reset_internal_reg),
		.count_direction(randomization_factors[3]),
		.shift_or_rotate(randomization_factors[0]),
		.number_of_shifts_or_rotations(randomization_factors[2:1]),

		.random_number_out(lock_combo_bus[7:4])
	);

	RNG_0_TO_F RandomDigit3(
		.clock(clock),
		.enable(rng_always_enabled),
		.reset(reset_internal_reg),
		.count_direction(randomization_factors[2]),
		.shift_or_rotate(randomization_factors[3]),
		.number_of_shifts_or_rotations(randomization_factors[1:0]),

		.random_number_out(lock_combo_bus[11:8])
	);

	assign lock_combination = lock_combo_bus;
endmodule
