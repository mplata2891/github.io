import cv2
import numpy as np
import time
import os
from matplotlib import pyplot as plt
import psutil


start_time = time.time()
process = psutil.Process(os.getpid())
start_cpu_times = process.cpu_times()
cpu_freq = psutil.cpu_freq().current  # in MHz



# Get current script directory and image path
script_path = os.path.abspath(__file__)
new_directory = os.path.dirname(script_path)
image_file_path = os.path.join(new_directory, 'highresstockimage.png')

# Read and convert image
color_image = cv2.imread(image_file_path)
gray_image = cv2.cvtColor(color_image, cv2.COLOR_BGR2GRAY)

# Create convolution matrices
edge_detection_matrix = np.array([
    [-0.7263, -0.9183, -0.9078, -0.9109, -0.9078, -0.9183, -0.7263],
    [-0.7263, -0.5612, -0.5847, -0.5814, -0.5847, -0.5612, -0.7263],
    [ 0.5447,  0.6292,  0.6539,  0.6543,  0.6539,  0.6292,  0.5447],
    [ 1.8157,  1.7005,  1.6771,  1.6758,  1.6771,  1.7005,  1.8157],
    [ 0.5447,  0.6292,  0.6539,  0.6543,  0.6539,  0.6292,  0.5447],
    [-0.7263, -0.5612, -0.5847, -0.5814, -0.5847, -0.5612, -0.7263],
    [-0.7263, -0.9183, -0.9078, -0.9109, -0.9078, -0.9183, -0.7263]
])

gaussian_blur_matrix = np.array([
    [0.00000067, 0.00002292, 0.00019117, 0.00038771, 0.00019117, 0.00002292, 0.00000067],
    [0.00002292, 0.00078633, 0.00655965, 0.01330373, 0.00655965, 0.00078633, 0.00002292],
    [0.00019117, 0.00655965, 0.05472157, 0.11098164, 0.05472157, 0.00655965, 0.00019117],
    [0.00038771, 0.01330373, 0.11098164, 0.22508352, 0.11098164, 0.01330373, 0.00038771],
    [0.00019117, 0.00655965, 0.05472157, 0.11098164, 0.05472157, 0.00655965, 0.00019117],
    [0.00002292, 0.00078633, 0.00655965, 0.01330373, 0.00655965, 0.00078633, 0.00002292],
    [0.00000067, 0.00002292, 0.00019117, 0.00038771, 0.00019117, 0.00002292, 0.00000067]
])

sharpening_matrix = np.array([
    [ 0,    0,   -0.2,  0,    0],
    [ 0,  -0.2,  -0.5, -0.2,  0],
    [-0.2, -0.5,  5,   -0.5, -0.2],
    [ 0,  -0.2,  -0.5, -0.2,  0],
    [ 0,    0,   -0.2,  0,    0]
])

# Apply convolutions
blurred_image = cv2.filter2D(gray_image, -1, gaussian_blur_matrix)
edged_image = cv2.filter2D(gray_image, -1, edge_detection_matrix)
sharpened_image = cv2.filter2D(gray_image, -1, sharpening_matrix)

# Display images using matplotlib
plt.figure("Original Image")
plt.imshow(gray_image, cmap='gray')
plt.axis('off')

plt.figure("Blurred Image")
plt.imshow(blurred_image, cmap='gray')
plt.axis('off')

plt.figure("Edged Image")
plt.imshow(edged_image, cmap='gray')
plt.axis('off')

plt.figure("Sharpened Image")
plt.imshow(sharpened_image, cmap='gray')
plt.axis('off')

elapsed_time = time.time() - start_time

# End measurements
elapsed_time = time.time() - start_time
end_cpu_times = process.cpu_times()
user_time = end_cpu_times.user - start_cpu_times.user
system_time = end_cpu_times.system - start_cpu_times.system
total_cpu_time = user_time + system_time

# Estimate total cycles and CPI
cpu_freq_hz = cpu_freq * 1e6  # Convert MHz to Hz
estimated_cycles = total_cpu_time * cpu_freq_hz
# NOTE: Instruction count is not measurable directly from Python.
# Assume an estimate (e.g. 1e9) or use `perf` externally for actual instruction count.
estimated_instructions = 1e9
estimated_cpi = estimated_cycles / estimated_instructions


print(f'\n--- Benchmark Results ---')
print(f'Elapsed time: {elapsed_time:.4f} seconds')
print(f'Estimated CPU frequency: {cpu_freq:.2f} MHz')
print(f'Estimated CPU cycles: {estimated_cycles:.0f}')
print(f'Estimated CPI (based on 1e9 instructions): {estimated_cpi:.4f}')
print(f'Memory used: {process.memory_info().rss / (1024 ** 2):.2f} MB')


plt.show()