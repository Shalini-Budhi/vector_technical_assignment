// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputHandles={[
        { key: 'system', idSuffix: 'system', topPercent: 35 },
        { key: 'prompt', idSuffix: 'prompt', topPercent: 70 },
      ]}
      outputHandles={[
        { key: 'response', idSuffix: 'response', topPercent: 50 },
      ]}
    >
      <div style={{ fontSize: 12, color: '#D1D5DB' }}>
        Large language model node.
      </div>
    </BaseNode>
  );
};

