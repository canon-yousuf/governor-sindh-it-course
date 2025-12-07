import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function TerminalBlock({children, title = "bash — 80x24"}) {
  return (
    <div style={{
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
      overflow: 'hidden',
      marginBottom: 'var(--ifm-leading)',
      border: '1px solid var(--ifm-color-emphasis-200)'
    }}>
      <div style={{
        background: '#333',
        color: '#ddd',
        padding: '5px 10px',
        fontSize: '12px',
        fontFamily: 'monospace',
        borderBottom: '1px solid #444',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{display: 'flex', gap: '6px', marginRight: '10px'}}>
          <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56'}}></span>
          <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e'}}></span>
          <span style={{width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f'}}></span>
        </div>
        {title}
      </div>
      <div style={{margin: 0}}>
        {children}
      </div>
    </div>
  );
}
