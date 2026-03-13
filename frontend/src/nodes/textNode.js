// textNode.js

import { useMemo, useState } from 'react';
import { BaseNode } from './BaseNode';

const variableRegex = /\{\{\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const variables = useMemo(() => {
    const names = new Set();
    let match;
    while ((match = variableRegex.exec(currText)) !== null) {
      names.add(match[1]);
    }
    return Array.from(names);
  }, [currText]);

  const dynamicWidth = Math.min(420, 180 + currText.length * 2);
  const lineCount = currText.split('\n').length;
  const dynamicHeight = Math.min(260, 90 + lineCount * 18 + Math.max(0, currText.length - 40));

  const inputHandles = variables.map((name, index) => ({
    key: name,
    idSuffix: name,
    topPercent: 25 + index * 18,
  }));

  return (
    <BaseNode
      id={id}
      title="Text"
      inputHandles={inputHandles}
      outputHandles={[
        {
          key: 'output',
          idSuffix: 'output',
          topPercent: 50,
        },
      ]}
      style={{ width: dynamicWidth, minHeight: dynamicHeight }}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 11, color: '#9CA3AF' }}>Text</span>
        <textarea
          value={currText}
          onChange={handleTextChange}
          rows={Math.min(10, lineCount + 1)}
          style={{
            resize: 'none',
            borderRadius: 4,
            border: '1px solid #374151',
            padding: '6px 8px',
            fontSize: 12,
            backgroundColor: '#020617',
            color: '#E5E7EB',
            fontFamily: 'inherit',
          }}
        />
      </label>
      {variables.length > 0 && (
        <div style={{ fontSize: 11, color: '#9CA3AF' }}>
          Variables: {variables.join(', ')}
        </div>
      )}
    </BaseNode>
  );
};

