# Tasks: Physical AI & Humanoid Robotics Book

**Input**: Design documents from `specs/003-physical-ai-book/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Initialize Docusaurus v3 project in `physical-ai-book/`
- [X] T002 [P] Clean default scaffolding (remove `blog/`, `src/pages/index.js`) in `physical-ai-book/`
- [X] T003 [P] Install Math plugins (`remark-math`, `rehype-katex`) in `physical-ai-book/package.json`
- [X] T004 Update `docusaurus.config.js` with project metadata and math presets

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Create directory structure for all modules in `docs/`
- [X] T006 [P] Update `src/css/custom.css` with Cyberpunk theme variables
- [X] T007 [P] Create `.github/workflows/deploy.yml` for GitHub Pages deployment
- [X] T008 Configure `sidebars.js` for sequential navigation structure

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

## Phase 3: User Story 1 - Reader Setup & Navigation (Priority: P1) 🎯 MVP

**Goal**: Readers can access the site, understand the mission, and setup their hardware.

**Independent Test**: Verify site loads, "The Lab" page shows hardware requirements, and navigation works.

### Implementation for User Story 1

- [X] T009 [P] [US1] Create `docs/01-foundations/intro.md` with "Embodied Intelligence" content
- [X] T010 [P] [US1] Create `docs/01-foundations/hardware-matrix.md` with Workstation vs Edge Kit comparison
- [X] T011 [US1] Configure sidebar in `docs/01-foundations/_category_.json`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

## Phase 4: User Story 2 - Simulation Learning (Digital Twin) (Priority: P2)

**Goal**: Readers are warned about GPU requirements before starting simulation modules.

**Independent Test**: Verify "Module 3" pages display the GPU warning admonition.

### Implementation for User Story 2

- [X] T012 [P] [US2] Create `src/components/GpuWarning.js` React component
- [X] T013 [P] [US2] Register `GpuWarning` in MDX scope or global config
- [X] T014 [US2] Create `docs/04-module-3-brain/isaac-sim.md` using `<GpuWarning />`
- [X] T015 [US2] Create `docs/03-module-2-twin/gazebo-physics.md` content
- [X] T016 [US2] Create `docs/03-module-2-twin/sensors.md` content
- [X] T017 [US2] Create `docs/04-module-3-brain/nav2.md` content

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

## Phase 5: User Story 3 - Code & Architecture Study (Priority: P2)

**Goal**: Readers can study code snippets and architecture diagrams.

**Independent Test**: Verify syntax highlighting for Python/Bash and Mermaid diagram rendering.

### Implementation for User Story 3

- [X] T018 [P] [US3] Create `src/components/TerminalBlock.js` React component
- [X] T019 [P] [US3] Create `docs/02-module-1-ros2/ros2-basics.md` with Python code blocks
- [X] T020 [US3] Create `docs/02-module-1-ros2/urdf-anatomy.md` with Mermaid diagram
- [X] T021 [US3] Enable Mermaid support in `docusaurus.config.js`

**Checkpoint**: All user stories should now be independently functional

## Phase 6: User Story 4 - Search & Discovery (Priority: P3)

**Goal**: Readers can find specific terms across the book.

**Independent Test**: Verify search bar returns results for known terms.

### Implementation for User Story 4

- [X] T022 [US4] Configure Algolia DocSearch (or local search) in `docusaurus.config.js`

## Phase 7: Remaining Content & Polish

**Purpose**: Complete the curriculum and ensure quality.

- [X] T023 [P] Create `docs/05-module-4-vla/whisper-voice.md` content
- [X] T024 [P] Create `docs/05-module-4-vla/llm-planning.md` content
- [X] T025 [P] Create `docs/06-capstone/autonomous-humanoid.md` content
- [X] T026 Run production build `npm run build` and verify artifacts

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion

### User Story Dependencies

- **User Story 1 (P1)**: Independent after Foundational
- **User Story 2 (P2)**: Independent after Foundational (GpuWarning component is self-contained)
- **User Story 3 (P2)**: Independent after Foundational (Mermaid config is self-contained)
- **User Story 4 (P3)**: Depends on content existence (US1-3) for meaningful search results

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 & 2
2. Complete Phase 3 (Intro + Hardware Matrix)
3. Deploy to GitHub Pages -> **Live MVP**

### Incremental Delivery

1. Add US2 (Sim + Warnings) -> Deploy
2. Add US3 (ROS 2 + Diagrams) -> Deploy
3. Add US4 (Search) -> Deploy
4. Add remaining content -> Deploy
