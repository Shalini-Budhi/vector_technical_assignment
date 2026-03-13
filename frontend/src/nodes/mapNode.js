import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MapNode = ({ id, data }) => {
  const [mapping, setMapping] = useState(
    data?.mapping || 'field_out = field_in'
  );

  return (
    <BaseNode
      id={id}
      title="Map"
      inputHandles={[
        { key: 'input', idSuffix: 'input', topPercent: 50 },
      ]}
      outputHandles={[
        { key: 'output', idSuffix: 'output', topPercent: 50 },
      ]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>Mapping</span>
        <input
          type="text"
          value={mapping}
          onChange={(e) => setMapping(e.target.value)}
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

