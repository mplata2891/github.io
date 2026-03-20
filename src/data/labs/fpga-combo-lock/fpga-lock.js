// src/data/labs/fpga-combination-lock/fpga-lock.js
import snippet from './snippet.v?raw';
import fullCode from './full-code.v?raw';

export const fpgaLockLab = {
  id: "ECE3300L",
  type: "software", 
  courseName: "Digital System Design",
  professor: "Prof. Mohamed El-Hadedy Aly",
  tags: ["VERILOG", "FPGA", "XILINX VIVADO", "ARTIX-7", "RTL"],
  
  blurb: `Architected a pseudo-random 12-bit combination lock generator and finite state control system in Verilog, targeted for an Artix-7 FPGA.`,
  
  readme: `Developed a highly modular Register-Transfer Level (RTL) architecture utilizing Xilinx Vivado. Engineered custom digital components from the ground up, including Up/Down Counters, Decoders, Multiplexers, and a Right-Shifting Barrel Shifter. Synchronized the multi-module Pseudo-Random Number Generators (RNG) to the onboard system clock, utilizing strict edge-triggered behavioral logic to process dynamic game-state flags.`,
  
  primaryLanguage: "verilog",
  repoUrl: "https://github.com/Reconfigurable-Computing-CalPoly-Pomona/ECE3300-02-Fall2023/tree/main/Group_Bee",
  
  codeSnippet: snippet,
  fullCode: fullCode
};