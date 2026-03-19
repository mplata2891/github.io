// src/data/labs.js
// Centralized registry for academic modules and high-impact labs

// src/data/labs/index.js
import { lastLaughLab } from './labs/last-laugh/last_laugh.js';
import { poolBoyLab } from './labs/pool-boy/pool-boy.js';
import { numericalAnalysisLab } from './labs/numerical-analysis/numerical-analysis.js';
import { fpgaLockLab } from './labs/fpga-combo-lock/fpga-lock.js';
import { processSchedulerLab } from './labs/process-scheduler/process-scheduler.js';
import { hardwareBenchmarkLab } from './labs/hardware-benchmarking/hardware-benchmarking.js';

// Section Context
export const LABS_DESCRIPTION = "A technical archive of highlighting some of my" + 
" academic coursework and laboratory experiments. This collection demonstrates" + 
" my foundational understanding of operating systems, hardware architecture, and" +
" low-level software engineering.";

// Centralized registry for all execution logs
export const LABS = [
  lastLaughLab,
  poolBoyLab,
  numericalAnalysisLab,
  fpgaLockLab,
  processSchedulerLab,
  hardwareBenchmarkLab
];