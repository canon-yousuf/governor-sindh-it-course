---
sidebar_position: 1
title: Whisper Integration
description: Voice-to-Action with OpenAI Whisper
---

# Voice-to-Action with Whisper

To interact naturally with humanoids, we use **OpenAI Whisper** for robust speech-to-text.

## Architecture

1.  **Microphone Node**: Captures audio buffer.
2.  **Whisper Service**: Transcribes audio to text.
3.  **Intent Matcher**: Maps text to ROS actions (e.g., "Walk forward" -> `/cmd_vel`).

## Setup

```bash
pip install openai-whisper
```

```python
import whisper
model = whisper.load_model("base")
result = model.transcribe("audio.mp3")
print(result["text"])
```

