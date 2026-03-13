import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const LogNode = ({ id, data }) => {
  const [label, setLabel] = useState(data?.label || 'Log');

  return (
    <BaseNode
      id={id}
      title="Log"
      inputHandles={[
        { key: 'input', idSuffix: 'input', topPercent: 50 },
      ]}
      outputHandles={[
        { key: 'output', idSuffix: 'output', topPercent: 50 },
      ]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>Label</span>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          style={{
            borderRadius: 4,
            border: '1px solid #374151',
            padding: '4px 6px',
            fontSize: 12,
            backgroundColor: '#020617',
            color: '#E5E7EB',
          }}
        />
      </label>
    </BaseNode>
  );
};

