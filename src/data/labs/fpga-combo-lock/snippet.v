// src/data/labs/fpga-combination-lock/snippet.v

// Structural instantiation of the Randomizer module
Randomization_Control Randomizer(
    .clock(system_clock),
    .reset_internal_reg(system_reset),
    .randomization_factors(to_random_combo_control)
);

// Structural instantiation of the Combination Generator
Combination_Generator RandomCombo(
    .randomization_factors(to_random_combo_control),
    .clock(system_clock),
    .reset_internal_reg(system_reset),
    .lock_combination(random_lock_combination)
);

// Synchronous sequential logic for state updating
always @(posedge system_clock)
begin
    if(system_reset)
        new_lock_combination_reg = 12'b0;
    else if(game_start_flag == 1'b1 & (game_clock == 6'b000000))
        begin
            new_lock_combination_reg <= random_lock_combination;
        end
end