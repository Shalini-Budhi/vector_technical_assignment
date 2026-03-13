import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id, data }) => {
  const [ms, setMs] = useState(data?.delayMs || 1000);

  return (
    <BaseNode
      id={id}
      title="Delay"
      inputHandles={[
        { key: 'in', idSuffix: 'in', topPercent: 50 },
      ]}
      outputHandles={[
        { key: 'out', idSuffix: 'out', topPercent: 50 },
      ]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>Delay (ms)</span>
        <input
          type="number"
          min={0}
          value={ms}
          onChange={(e) => setMs(Number(e.target.value))}
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

