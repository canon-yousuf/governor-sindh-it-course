import React from 'react';

export default function GpuWarning({minVram, recGpu, simName}) {
  return (
    <div className="hardware-alert">
      <h4>⚡ Hardware Check: {simName}</h4>
      <p>
        <strong>Minimum Requirement:</strong> {minVram} VRAM <br />
        <strong>Recommended:</strong> {recGpu}
      </p>
      <small>
        Attempting to run this module on integrated graphics or CPUs will result in a crash.
      </small>
    </div>
  );
}
