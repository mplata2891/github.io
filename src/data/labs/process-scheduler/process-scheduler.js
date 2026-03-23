// src/data/labs/process-scheduler/process-scheduler.js
import snippet from './snippet.c?raw';
import fullCode from './full-code.c?raw';

export const processSchedulerLab = {
  id: "ECE4310_OS_SCHEDULER",
  type: "software",
  courseName: "Op Sys for Embedded Apps",
  professor: "Prof. Liviu Oniciuc",
  tags: ["C", "OPERATING_SYSTEMS", "MEMORY_MGT", "DATA_STRUCTURES"],
  
  problem: `Design and implement a CPU process scheduler in C capable of managing
  simulated embedded application processes across multiple priority levels,
  preventing starvation, and handling dynamic workloads.`,

  solution: `Three-queue MLFQ scheduler using dynamically allocated linked lists.
  Implements Round-Robin with feedback demotion, FCFS on the lowest queue,
  and an aging mechanism that auto-promotes starving processes to prevent
  execution bottlenecks.`,

  primaryLanguage: "c",
  repoUrl: "https://github.com/mplata2891/ECE4310_Seminar2_ProcessScheduler",
  
  codeSnippet: snippet,
  fullCode: fullCode
};