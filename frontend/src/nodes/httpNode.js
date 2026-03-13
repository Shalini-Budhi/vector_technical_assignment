import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const HttpNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      id={id}
      title="HTTP Request"
      inputHandles={[
        { key: 'body', idSuffix: 'body', topPercent: 50 },
      ]}
      outputHandles={[
        { key: 'response', idSuffix: 'response', topPercent: 50 },
      ]}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>URL</span>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>Method</span>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          style={{
            borderRadius: 4,
            border: '1px solid #374151',
            padding: '4px 6px',
            fontSize: 12,
            backgroundColor: '#020617',
            color: '#E5E7EB',
          }}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
    </BaseNode>
  );
};

