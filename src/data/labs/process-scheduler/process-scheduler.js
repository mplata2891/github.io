// src/data/labs/process-scheduler/process-scheduler.js
import snippet from './snippet.c?raw';
import fullCode from './full-code.c?raw';

export const processSchedulerLab = {
  id: "ECE4310_OS_SCHEDULER",
  type: "software",
  courseName: "Op Sys for Embedded Apps",
  professor: "Prof. Liviu Oniciuc",
  tags: ["C", "OPERATING_SYSTEMS", "MEMORY_MGT", "DATA_STRUCTURES"],
  
  blurb: `Built a Multi-Level Feedback Queue (MLFQ) process scheduler in C to manage simulated embedded application processes with aging and priority upgrades.`,
  
  readme: `Developed a custom Multi-Level Feedback Queue scheduler utilizing dynamically allocated Linked Lists to represent CPU process queues. Implemented scheduling algorithms including First-Come-First-Serve (FCFS) and strict Feedback Queue logic. The system features dynamic priority downgrades upon time-quantum expiration and includes a starvation-prevention (aging) mechanism to automatically upgrade long-waiting processes, preventing execution bottlenecks.`,
  
  primaryLanguage: "c",
  codeSnippet: snippet,
  fullCode: fullCode
};