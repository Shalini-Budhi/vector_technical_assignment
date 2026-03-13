// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: '16px 20px',
        backgroundColor: '#020617',
        borderBottom: '1px solid #1F2933',
        boxShadow: '0 6px 16px rgba(15, 23, 42, 0.6)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: '#E5E7EB',
          marginBottom: 10,
        }}
      >
        Pipeline Nodes
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="map" label="Map" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="log" label="Log" />
        <DraggableNode type="http" label="HTTP" />
      </div>
    </div>
  );
};

