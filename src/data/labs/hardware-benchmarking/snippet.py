# src/data/labs/hardware-benchmarking/snippet.py

# End hardware execution measurements
elapsed_time = time.time() - start_time
end_cpu_times = process.cpu_times()
user_time = end_cpu_times.user - start_cpu_times.user
system_time = end_cpu_times.system - start_cpu_times.system
total_cpu_time = user_time + system_time

# Estimate total CPU cycles and CPI
# CPU frequency hooked dynamically via psutil
cpu_freq_hz = cpu_freq * 1e6  
estimated_cycles = total_cpu_time * cpu_freq_hz

# Calculate Estimated Cycles Per Instruction (CPI)
estimated_instructions = 1e9
estimated_cpi = estimated_cycles / estimated_instructions

print(f'\n--- Hardware Benchmark Results ---')
print(f'Elapsed wall clock time: {elapsed_time:.4f} seconds')
print(f'Total CPU execution time: {total_cpu_time:.4f} seconds')
print(f'Estimated CPI: {estimated_cpi:.4f}')