---
sidebar_position: 2
title: Nav2 (Navigation 2)
description: Path Planning and Navigation for Humanoids
---

# Nav2 (Navigation 2)

**Nav2** is the industry standard navigation stack for ROS 2. It takes a goal pose and moves the robot there safely.

## Architecture

Nav2 uses **Behavior Trees** to orchestrate tasks.

1.  **Global Planner**: Calculates the path from Start to Goal (e.g., Dijkstra, A*).
2.  **Local Planner (Controller)**: Follows the path while avoiding dynamic obstacles (e.g., MPPI, DWB).
3.  **Costmaps**: 2D grids representing obstacles.
    *   **Global Costmap**: Static map of the building.
    *   **Local Costmap**: Rolling window around the robot (includes people/chairs).

## Humanoid Navigation

Humanoids are not differential drive robots. They need a special **Footstep Planner** rather than just a velocity command.

:::tip[REALITY GAP]
Nav2 assumes odometry is accurate. On a humanoid, **slip** is common. If your odometry drifts, the map will break. Use **Visual SLAM** (V-SLAM) to correct for slip.
:::
