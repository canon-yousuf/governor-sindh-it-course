---
sidebar_position: 2
title: LLM Planning
description: High-level Logic with Large Language Models
---

# LLM Planning

Large Language Models (GPT-4, Llama 3) can act as the **Cerebral Cortex** of the robot, breaking down abstract goals into primitive actions.

## Prompt Engineering for Robots

We use a technique called **Chain of Thought (CoT)** prompting.

> **User**: "Clean the kitchen."
>
> **LLM**:
> 1.  Navigate to Kitchen.
> 2.  Detect objects on the table.
> 3.  Pick up the cup.
> 4.  Place cup in sink.

## Code Generation

LLMs can also write Python code to control the robot directly via the ROS 2 Python API.
