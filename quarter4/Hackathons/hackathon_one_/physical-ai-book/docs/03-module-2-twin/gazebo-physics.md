---
sidebar_position: 1
title: Gazebo Physics
description: Introduction to Physics Engines and Gazebo
---

# Gazebo Physics

Gazebo is the standard simulator for ROS 2. It handles the **physics engine** (Dart, Bullet, ODE) that calculates gravity, friction, and inertia.

## Physics Engines

A physics engine solves the equations of motion for rigid bodies.

### Key Parameters

*   **Gravity**: Usually $-9.81 m/s^2$ in the Z-axis.
*   **Friction**: Static ($\mu_s$) and Kinetic ($\mu_k$).
*   **Restitution**: Bounciness of a collision.

:::tip[REALITY GAP]
In Gazebo, surfaces are often perfectly flat and friction is uniform. In the real world, floors are uneven and friction varies with dust/temperature. Always add **noise** to your simulation.
:::

## The World File (`.sdf`)

Gazebo worlds are defined in SDF (Simulation Description Format).

```xml
<world name="default">
  <include>
    <uri>model://sun</uri>
  </include>
  <include>
    <uri>model://ground_plane</uri>
  </include>
</world>
```

