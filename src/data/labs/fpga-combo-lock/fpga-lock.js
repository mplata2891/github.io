// src/data/labs/fpga-combination-lock/fpga-lock.js
import snippet from './snippet.v?raw';
import fullCode from './full-code.v?raw';

export const fpgaLockLab = {
  id: "ECE3300L",
  type: "software", 
  courseName: "Digital System Design",
  professor: "Prof. Mohamed El-Hadedy Aly",
  tags: ["VERILOG", "FPGA", "XILINX VIVADO", "ARTIX-7", "RTL"],
  
  problem: `Design a pseudo-random 12-bit combination lock and finite state
  control system in Verilog for an Artix-7 FPGA.`,

  solution: `Modular RTL architecture in Xilinx Vivado. Custom components
  include Up/Down Counters, Decoders, Muxes, and a Barrel Shifter.
  Synchronized PRNG modules to the system clock using edge-triggered
  behavioral logic to process game-state flags.`,
  
  primaryLanguage: "verilog",
  repoUrl: "https://github.com/Reconfigurable-Computing-CalPoly-Pomona/ECE3300-02-Fall2023/tree/main/Group_Bee",
  
  codeSnippet: snippet,
  fullCode: fullCode
};