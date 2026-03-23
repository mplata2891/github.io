// src/data/labs/hardware-benchmarking/hardware-benchmark.js
import snippet from './snippet.py?raw';
import fullCode from './full-code.py?raw';

export const hardwareBenchmarkLab = {
  id: "SYS_ARCH_BENCHMARK",
  type: "software",
  courseName: "Hardware Architecture Analysis",
  professor: "Prof. Mohamed El-Hadedy Aly",
  tags: ["PYTHON", "OPENCV", "PSUTIL", "ARM/x86", "TELEMETRY"],
  
  problem: `Benchmark a Python image processing pipeline across nine x86/x64
  and ARM architectures to compare CPU execution, memory, and power usage.`,

  solution: `Translated a MATLAB pipeline (grayscale, blur, edge detection,
  sharpening) into Python using OpenCV and SciPy. Benchmarking scripts
  capture CPU cycles, peak memory (RSS), and estimated CPI via psutil
  to evaluate performance-per-watt across desktops, SoCs, and SBCs.`,
  
  primaryLanguage: "python",
  repoUrl: "https://github.com/california-polytechnic-university/ECE4300_SP2025/tree/main/Group_F",
  
  codeSnippet: snippet,
  fullCode: fullCode
};