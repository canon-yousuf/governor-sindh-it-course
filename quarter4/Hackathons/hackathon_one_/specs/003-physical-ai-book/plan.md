# Implementation Plan: Physical AI & Humanoid Robotics Book

**Branch**: `003-physical-ai-book` | **Date**: 2025-12-07 | **Spec**: [specs/003-physical-ai-book/spec.md](spec.md)
**Input**: Feature specification from `specs/003-physical-ai-book/spec.md`

## Summary

The "Physical AI & Humanoid Robotics Book" is a static documentation website built with Docusaurus 3.x, serving as a comprehensive curriculum for embodied intelligence. It covers ROS 2, Digital Twins (Gazebo/Unity), NVIDIA Isaac Sim, and VLA/LLMs. The site will be hosted on GitHub Pages with a CI/CD pipeline.

## Technical Context

**Language/Version**: Markdown, TypeScript/React (Node.js 18+)
**Primary Dependencies**: Docusaurus 3.x, remark-math, rehype-katex, Prism (syntax highlighting)
**Storage**: Static files (Git)
**Testing**: Build validation (Docusaurus build), Link checking
**Target Platform**: Web (GitHub Pages)
**Project Type**: Static Site / Documentation
**Performance Goals**: Fast LCP (<1.5s), Static generation
**Constraints**: NVIDIA RTX requirements for Sim modules
**Scale/Scope**: 7 Modules, ~50-100 pages

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Hardware Reality Check**: `hardware-matrix.md` and `GpuWarning.js` planned to explicitly define RTX/Jetson requirements.
- [x] **Code Verification**: Syntax highlighting (`rclpy`, `bash`) and standard ROS 2 Humble verification planned.
- [x] **Visual Learning**: Mermaid support and `urdf-anatomy.md` included for visual explanation.
- [x] **Sim-to-Real**: "Reality Gap" callouts (`:::tip[REALITY GAP]`) mandated for simulation chapters.

## Project Structure

### Documentation (this feature)

```text
specs/003-physical-ai-book/
├── plan.md              # This file
├── research.md          # Tech stack decisions (Theme, Plugins)
├── data-model.md        # Content taxonomy and Component props
├── quickstart.md        # Local dev guide
└── contracts/           # Component schemas (if applicable)
```

### Source Code (repository root)

```text
# Docusaurus Project Structure
physical-ai-book/
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD
├── docs/                   # Content
│   ├── 01-foundations/     # Intro & Hardware
│   ├── 02-module-1-ros2/   # ROS 2 Basics
│   ├── 03-module-2-twin/   # Gazebo/Unity
│   ├── 04-module-3-brain/  # Isaac Sim
│   ├── 05-module-4-vla/    # VLA & LLMs
│   └── 06-capstone/        # Final Project
├── src/
│   ├── components/
│   │   ├── GpuWarning.js   # Custom Admonition
│   │   └── TerminalBlock.js
│   └── css/
│       └── custom.css      # Cyberpunk theme
├── docusaurus.config.js    # Main Config
└── sidebars.js             # Nav logic
```

**Structure Decision**: Standard Docusaurus scaffolding extended with custom components for hardware warnings and terminal simulation.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Custom React Components | Critical hardware warnings | Standard markdown alerts lack specific "VRAM" emphasis needed for this course. |
