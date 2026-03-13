import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expression || 'score > 0.5');

  return (
    <BaseNode
      id={id}
      title="Condition"
      inputHandles={[
        { key: 'input', idSuffix: 'input', topPercent: 35 },
      ]}
      outputHandles={[
        { key: 'true', idSuffix: 'true', topPercent: 35 },
        { key: 'false', idSuffix: 'false', topPercent: 70 },
      ]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>Expression</span>
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
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

