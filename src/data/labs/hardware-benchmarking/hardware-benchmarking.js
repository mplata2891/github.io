// src/data/labs/hardware-benchmarking/hardware-benchmark.js
import snippet from './snippet.py?raw';
import fullCode from './full-code.py?raw';

export const hardwareBenchmarkLab = {
  id: "SYS_ARCH_BENCHMARK",
  type: "software",
  courseName: "Hardware Architecture Analysis",
  professor: "Performance Benchmarking",
  tags: ["PYTHON", "OPENCV", "PSUTIL", "ARM/x86", "TELEMETRY"],
  
  blurb: `Benchmarked a Python-based image processing sequence across nine diverse x86/x64 and ARM hardware architectures to analyze CPU execution, memory utilization, and power consumption.`,
  
  readme: `Translated a MATLAB image processing pipeline (grayscale, Gaussian blur, edge detection, sharpening) into Python. Engineered multiple benchmarking scripts utilizing OpenCV and SciPy to accommodate varying architectural constraints across high-performance desktops, mobile SoCs, and single-board computers. Utilized the 'psutil' library to gather deep hardware telemetry, calculating total CPU cycles, peak memory usage (RSS), and Estimated Cycles Per Instruction (CPI) to evaluate performance-per-watt efficiency across platforms.`,
  
  primaryLanguage: "python",
  codeSnippet: snippet,
  fullCode: fullCode
};