---
sidebar_position: 2
title: Sensors Simulation
description: Simulating Lidar, Cameras, and IMUs
---

# Simulating Sensors

Robots perceive the world through sensors. In simulation, we must generate **synthetic data** that mimics real sensors.

## Lidar (Light Detection and Ranging)

Lidar shoots laser beams to measure distance.

*   **Ray-casting**: The simulator calculates the intersection of a ray with scene geometry.
*   **Noise Model**: Real Lidars have gaussian noise. We simulate this by adding random values to the range data.

## Cameras (RGB-D)

RGB-D cameras provide color and depth images.

*   **Depth Map**: A grayscale image where pixel intensity represents distance.
*   **Point Cloud**: Converting depth + RGB into a 3D set of points $(x, y, z, r, g, b)$.

:::tip[REALITY GAP]
Simulated cameras have perfect lighting and no motion blur. Real cameras suffer from:
1.  **Motion Blur**: When the robot moves fast.
2.  **Overexposure**: Looking at windows/sun.
3.  **Reflections**: Mirrors confuse depth sensors.
:::
