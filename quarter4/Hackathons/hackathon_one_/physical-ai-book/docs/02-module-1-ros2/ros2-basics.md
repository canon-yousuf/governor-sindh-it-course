---
sidebar_position: 1
title: ROS 2 Basics
description: Nodes, Topics, and Services
---

import TerminalBlock from '@site/src/components/TerminalBlock';
import CodeBlock from '@theme/CodeBlock';

# ROS 2 Basics

**ROS 2 (Robot Operating System)** is the middleware that connects the robot's brain (algorithms) to its body (hardware).

## Nodes

A **Node** is a single process that performs a specific task (e.g., reading a camera, turning a wheel).

<TerminalBlock title="Terminal 1: Start a Node">
<CodeBlock language="bash">
ros2 run demo_nodes_cpp talker
</CodeBlock>
</TerminalBlock>

## Topics

Nodes communicate via **Topics** (Publisher-Subscriber pattern).

### Python Example: Minimal Publisher

Here is a simple Python node that publishes "Hello World":

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```