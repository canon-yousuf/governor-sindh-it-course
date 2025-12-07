# Research & Decisions: Physical AI Book

**Feature**: Physical AI & Humanoid Robotics Book
**Date**: 2025-12-07

## Stack Decisions

### Framework: Docusaurus 3.x
- **Decision**: Use Docusaurus 3.x (Classic Preset).
- **Rationale**: Built-in React support allows for custom components (like `GpuWarning.js`) which are critical for the hardware-specific nature of this course. Strong MDX support and huge ecosystem.
- **Alternatives**: MkDocs (Material) - simpler but harder to customize with interactive React components.

### Math & Physics Rendering
- **Decision**: `remark-math` and `rehype-katex`.
- **Rationale**: Essential for rendering matrices, quaternions, and physics equations required in Module 2 (Digital Twin) and Module 3 (The Brain).

### Deployment
- **Decision**: GitHub Pages via GitHub Actions.
- **Rationale**: Free, integrated with the repo, and standard for open-source docs.
- **Workflow**: Trigger on `push: main` -> `npm run build` -> `gh-pages` branch.

### Visual Style
- **Decision**: "Cyberpunk/Robotics" Theme (Dark/Neon).
- **Rationale**: Aligns with the "Physical AI" and "Humanoid" aesthetic. Differentiating from standard "corporate blue" docs.
- **Implementation**: Custom CSS overriding Infima variables (Docusaurus base theme).

## Architecture Decisions

### Hardware Warnings
- **Decision**: Custom React Component `GpuWarning`.
- **Rationale**: "Admonitions" are good, but we need a structured way to specify "Minimum VRAM" (e.g., 12GB) vs "Recommended" (e.g., 24GB) for Isaac Sim chapters to prevent user failure.
