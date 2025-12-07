---
sidebar_position: 1
title: NVIDIA Isaac Sim Setup
description: Installing Omniverse and Isaac Sim for Humanoid Simulation
---

import GpuWarning from '@site/src/components/GpuWarning';

# NVIDIA Isaac Sim Setup

Isaac Sim is built on the **NVIDIA Omniverse** platform. It uses **USD (Universal Scene Description)** to create physically accurate worlds.

<GpuWarning minVram="12GB" recGpu="RTX 4080 (16GB+)" simName="Isaac Sim 2023.1.1" />

## 1. Installation Steps

1.  **Install NVIDIA Drivers**: Ensure you have the latest `535.xx` or `545.xx` drivers.
2.  **Download Omniverse Launcher**: Get it from the [NVIDIA website](https://www.nvidia.com/en-us/omniverse/).
3.  **Install Cache**: In the Exchange tab, install the "Cache" app (improves asset loading).
4.  **Install Isaac Sim**: Search for "Isaac Sim" and install version **2023.1.1** (or latest stable).

## 2. Verifying Installation

Run the following command in your terminal to check the selector:

```bash
./isaac-sim.sh --selector
```

:::tip[REALITY GAP]
Simulation runs faster than real time. When transferring to a real robot, your control loop frequency (e.g., 500Hz) matters significantly more than in sim.
:::
