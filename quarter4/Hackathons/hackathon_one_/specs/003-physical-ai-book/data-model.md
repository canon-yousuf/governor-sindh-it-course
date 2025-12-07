# Data Model & Content Taxonomy

## Content Entities

### Module (Directory)
Top-level container for a week-block of curriculum.
- **Naming**: `XX-slug` (e.g., `01-foundations`)
- **Structure**: Contains `_category_.json` for sidebar metadata.

### DocPage (MDX File)
A single lesson.
**Frontmatter**:
```yaml
title: String (Required)
sidebar_position: Integer (Required)
description: String (SEO)
tags: [List of Strings] (e.g., ['ros2', 'python'])
```

## Component Props

### GpuWarning.js
Displays a hardware requirement alert.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `minVram` | String | Yes | Minimum VRAM required (e.g., "12GB") |
| `recGpu` | String | No | Recommended GPU (e.g., "RTX 4090") |
| `simName` | String | Yes | Name of sim (e.g., "Isaac Sim 2023.1") |

**Usage**:
```jsx
<GpuWarning minVram="12GB" recGpu="RTX 4080" simName="Isaac Sim" />
```

### TerminalBlock.js
Styled terminal window for commands.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | String | No | Window title (e.g., "bash — 80x24") |
| `children` | Node | Yes | Content (Code block) |
