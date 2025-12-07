<!--
Sync Impact Report:
- Version change: New -> 1.0.0
- Modified Principles: Established Articles I-V
- Templates updated: .specify/templates/plan-template.md (Constitution Check gates added)
-->

# Physical AI & Humanoid Robotics Constitution

## Preamble
We, the collaborative unit of **Canon Yousuf (Architect)** and **Gemini (Lead Engineer/Agent)**, establish this Constitution to govern the creation of the open-source textbook, "Physical AI & Humanoid Robotics." This project bridges the gap between digital intelligence and physical embodiment using the **Spec-Kit Plus** framework.

## Core Principles

### Article I: The Mission
Our goal is to create a definitive, university-level resource that teaches students how to design, simulate, and deploy humanoid robots. We are moving beyond "chatbots" to "embodied intelligence."

**The Core Narrative:**
1.  **The Nervous System:** ROS 2 & Middleware.
2.  **The Digital Twin:** Gazebo, Unity & Physics.
3.  **The Brain:** NVIDIA Isaac Sim & Navigation.
4.  **The Voice & Logic:** VLA (Vision-Language-Action) & LLMs.

### Article III: Quality Standards (The "Physical" Law)
1.  **Hardware Reality Check:** We must explicitly state hardware requirements (RTX GPUs, Jetson Orin) for every module. We do not pretend cloud CPUs can run Isaac Sim.
2.  **Code Verification:** All code snippets (ROS 2 Python nodes, URDF XML, Isaac Sim USD loading) must be syntactically correct for **ROS 2 Humble/Iron** and **Isaac Sim 2023.1+**.
3.  **Visual Learning:** The book must prioritize diagrams and visual explanations for complex topics like "Coordinate Frames," "Quaternions," and "Neural Network Architecture."
4.  **Sim-to-Real Focus:** Every simulation chapter must conclude with a "Reality Gap" note, explaining how this transfers to physical hardware (e.g., noise in real Lidar vs. perfect sim Lidar).

## Article II: Technical Stack & Infrastructure
* **Framework:** Docusaurus (Static Site Generator).
* **Language:** Markdown (Content), React/TypeScript (Custom Components).
* **Deployment Target:** GitHub Pages via GitHub Actions.
* **Development Tools:**
    * **Gemini CLI:** For code generation and context management.
    * **Spec-Kit Plus:** For project orchestration (Constitution -> Specify -> Clarify -> Plan -> Tasks -> Implement).
    * **Context7 MCP:** For documentation retrieval.
    * **GitHub MCP:** For repository management.

## Article IV: The Spec-Kit Plus Workflow
We strictly adhere to the following iterative cycle for every chapter or module we build:
1.  `/sp.specify`: Define the module's learning outcomes and technical requirements.
2.  `/sp.clarify`: Identify missing hardware constraints or software dependencies.
3.  `/sp.plan`: Architect the folder structure (docs/module-x/) and sidebar configuration.
4.  `/sp.tasks`: Break down the writing and coding into atomic steps.
5.  `/sp.implement`: Generate the Docusaurus markdown and configuration files.

## Governance

### Article V: User Roles
* **Canon (The User):** Provides strategic direction, approves the syllabus, and manages the physical hardware/lab context.
* **Gemini (The Agent):** Executes the implementation, writes the technical prose, generates Docusaurus code, and ensures the GitHub deployment pipeline is valid.

### Amendment & Versioning
This Constitution governs the project's technical and operational standards.
- **Amendments**: Require a pull request with updated principles and a version bump (Major for removals, Minor for additions, Patch for clarifications).
- **Compliance**: All contributions must align with the Quality Standards (Article III).
- **Review**: The Architect (Canon) holds final approval on all constitutional changes.

**Version**: 1.0.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07