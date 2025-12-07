# Feature Specification: Physical AI & Humanoid Robotics Book

**Feature Branch**: `003-physical-ai-book`
**Created**: 2025-12-07
**Status**: Draft
**Input**: User description provided in prompt.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Reader Setup & Navigation (Priority: P1)

A student visits the website, reads the "Welcome & Foundations" to understand the scope, then navigates to "The Lab" to set up their physical or cloud environment.

**Why this priority**: Students cannot proceed with the course without understanding the hardware requirements and setting up their environment.

**Independent Test**:
- Verify the site loads at the root URL.
- Verify "Welcome" and "The Lab" sections are visible in the sidebar.
- Verify "The Lab" page contains the "Hardware Requirements" distinction (Workstation vs. Edge).

**Acceptance Scenarios**:
1. **Given** a visitor on the homepage, **When** they click "The Lab" in the sidebar, **Then** the page loads and displays "Hardware Requirements".
2. **Given** the "Hardware Requirements" page, **When** viewed, **Then** it clearly separates "Digital Twin Workstation" requirements from "Edge AI Kit" requirements.
3. **Given** a visitor, **When** they click "Next" at the bottom of a page, **Then** they are taken to the next sequential page in the module.

---

### User Story 2 - Simulation Learning (Digital Twin) (Priority: P2)

A student navigates to "Module 3: The Brain" to learn about Isaac Sim. They see a clear warning about GPU requirements before starting the tutorial.

**Why this priority**: Prevents user frustration by managing hardware expectations immediately for resource-intensive modules.

**Independent Test**:
- Navigate to a page in "Module 3" (placeholder or actual).
- Verify the presence of an Admonition (Warning) block regarding RTX 4070 Ti+ requirements.

**Acceptance Scenarios**:
1. **Given** a page in "Module 3: The Brain", **When** the page loads, **Then** a yellow/red warning box (Admonition) appears at the top stating GPU VRAM requirements.

---

### User Story 3 - Code & Architecture Study (Priority: P2)

A student reads "Module 1: The Nervous System" and copies a ROS 2 Python node snippet. They also view a Mermaid diagram explaining the node graph.

**Why this priority**: The core value of the book is technical accuracy and clarity through code and diagrams.

**Independent Test**:
- Check a page with Python code; verify syntax highlighting.
- Check a page with a Mermaid diagram; verify it renders graphically.

**Acceptance Scenarios**:
1. **Given** a code block tagged `python` or `rclpy`, **When** viewed, **Then** keywords are highlighted (colored) correctly.
2. **Given** a Mermaid.js code block, **When** the page renders, **Then** it displays as a diagram, not plain text.

---

### User Story 4 - Search & Discovery (Priority: P3)

A student wants to find "URDF" references across the entire book without manually browsing.

**Why this priority**: As the content grows, random access becomes critical for reference.

**Independent Test**:
- Use the search bar to query a term known to exist (e.g., "ROS").

**Acceptance Scenarios**:
1. **Given** the search bar, **When** "URDF" is typed, **Then** results appear pointing to "Module 1".

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST be built using **Docusaurus 3.x** (Classic Preset).
- **FR-002**: System MUST be hosted on **GitHub Pages** via a `gh-pages` branch.
- **FR-003**: System MUST include a **GitHub Actions workflow** to auto-deploy changes from `main` branch.
- **FR-004**: System MUST implement **Algolia DocSearch** (or local fallback).
- **FR-005**: Sidebar Navigation MUST implement the following structure:
    1. Welcome & Foundations
    2. The Lab
    3. Module 1: The Nervous System
    4. Module 2: The Digital Twin
    5. Module 3: The Brain
    6. Module 4: Vision-Language-Action
    7. Capstone
- **FR-006**: Pages discussing Isaac Sim MUST include a specific **Admonition (Warning)** block about GPU VRAM (RTX 4070 Ti+).
- **FR-007**: Code blocks MUST support syntax highlighting for **Python (`rclpy`)**, **XML (`URDF`/`SDF`)**, and **Bash**.
- **FR-008**: System MUST support rendering of **Mermaid.js** diagrams and static image assets.
- **FR-009**: The repository MUST maintain a `.spec/` folder for Spec-Kit Plus lifecycle artifacts.

### Key Entities

- **Module**: Top-level curriculum unit (e.g., "The Nervous System").
- **Page**: Individual lesson or guide within a Module.
- **Admonition**: Special block for warnings/tips.
- **Asset**: Image or Diagram file.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: **Initialization**: Docusaurus project builds locally with `npm run start` without errors.
- **SC-002**: **Deployment**: GitHub Action run completes successfully and updates `gh-pages` branch.
- **SC-003**: **Navigation**: User can click from "Module 1" through to "Capstone" using only "Next" buttons (verification of sidebar ordering).
- **SC-004**: **Hardware Clarity**: "Hardware Requirements" page exists and contains distinct sections for "Workstation" and "Edge Kit".
- **SC-005**: **Visuals**: At least one Mermaid diagram renders correctly on a test page.
