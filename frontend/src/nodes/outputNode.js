// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      inputHandles={[
        {
          key: 'value',
          idSuffix: 'value',
          topPercent: 50,
        },
      ]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>Name</span>
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
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
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>Type</span>
        <select
          value={outputType}
          onChange={handleTypeChange}
          style={{
            borderRadius: 4,
            border: '1px solid #374151',
            padding: '4px 6px',
            fontSize: 12,
            backgroundColor: '#020617',
            color: '#E5E7EB',
          }}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};

