// src/data/projects.js
// Centralized registry for major projects and case studies
import { f1tenthProject } from './projects/f1tenth/f1tenth.js';
import { tinyLeadersProject } from './projects/tiny-leaders/tiny-leaders.js';

// Centralized registry for major projects
// Section Context
export const PROJECTS_DESCRIPTION = "A collection of my recent engineering " +
  "projects. These case studies highlight my practical experience across " +
  "hardware integration, full-stack web development, and autonomous robotics.";

export const PROJECTS = [
  f1tenthProject,
  tinyLeadersProject
];