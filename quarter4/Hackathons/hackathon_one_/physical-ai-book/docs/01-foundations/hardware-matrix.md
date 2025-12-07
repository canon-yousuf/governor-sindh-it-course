---
sidebar_position: 2
title: Hardware Matrix
description: Required hardware for Digital Twin Workstation vs. Edge AI Kit
---

# Hardware Matrix: The Lab

To build physical AI, you need two distinct computing environments:
1.  **The Digital Twin Workstation**: A powerful PC for training and high-fidelity simulation.
2.  **The Edge AI Kit**: The onboard computer inside the robot.

## 1. The Digital Twin Workstation

This machine runs **NVIDIA Isaac Sim**, **Gazebo**, and **Unity**. It handles the heavy lifting of physics simulation and photorealistic rendering.

:::warning[Critical Requirement]
**NVIDIA RTX GPU** is mandatory. Isaac Sim **will not run** on MacOS (Apple Silicon) or Intel Integrated Graphics.
:::

| Component | Minimum Spec | Recommended Spec | Why? |
| :--- | :--- | :--- | :--- |
| **GPU** | NVIDIA RTX 3070 (8GB VRAM) | **NVIDIA RTX 4090 (24GB VRAM)** | VRAM is the bottleneck for Isaac Sim. |
| **CPU** | Intel Core i7 (10th Gen) | Intel Core i9 (13th Gen) / Threadripper | Physics threads. |
| **RAM** | 32GB DDR4 | **64GB+ DDR5** | Large scenes require massive memory. |
| **OS** | Ubuntu 20.04 / 22.04 LTS | Ubuntu 22.04 LTS | ROS 2 Humble/Iron compatibility. |

## 2. The Edge AI Kit

This computer lives **inside the robot**. It runs the inference (VLA models), path planning (Nav2), and hardware drivers (ROS 2 Control).

| Platform | Role | Pros | Cons |
| :--- | :--- | :--- | :--- |
| **NVIDIA Jetson Orin Nano** | Entry-Level Humanoid | Affordable, Good AI Ops | Low CPU power for heavy planning. |
| **NVIDIA Jetson AGX Orin** | Pro-Level Humanoid | **275 TOPS** AI Performance | Expensive (~$2000). |
| **Raspberry Pi 5** | Hobbyist | Cheap, Great Community | **No CUDA** (Cannot run heavy VLA). |

## 3. Robot Platforms

We will reference these platforms throughout the book:

*   **Unitree H1 / G1**: The reference humanoid platform.
*   **Custom 3D Printed**: Using Dynamixel servos (cheaper alternative).
