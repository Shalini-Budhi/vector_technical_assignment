// submit.js

import { useCallback, useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [submitting, setSubmitting] = useState(false);

  const handleClick = useCallback(async () => {
    if (submitting) return;
    setSubmitting(true);

    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const { num_nodes, num_edges, is_dag } = await response.json();

      alert(
        `Pipeline analysis:\n\n` +
          `Nodes: ${num_nodes}\n` +
          `Edges: ${num_edges}\n` +
          `Is DAG: ${is_dag ? 'Yes ✅' : 'No ❌'}`
      );
    } catch (error) {
      console.error(error);
      alert('Failed to submit pipeline to backend. Check console for details.');
    } finally {
      setSubmitting(false);
    }
  }, [nodes, edges, submitting]);

  return (
    <div
      style={{
        padding: '12px 20px 20px',
        borderTop: '1px solid #1F2933',
        backgroundColor: '#020617',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        disabled={submitting}
        style={{
          borderRadius: 999,
          border: 'none',
          padding: '10px 22px',
          background:
            'linear-gradient(135deg, #22C55E, #4ADE80)',
          color: '#022C22',
          fontWeight: 600,
          fontSize: 14,
          cursor: submitting ? 'not-allowed' : 'pointer',
          boxShadow: '0 10px 24px rgba(34, 197, 94, 0.45)',
          opacity: submitting ? 0.7 : 1,
        }}
      >
        {submitting ? 'Submitting…' : 'Submit Pipeline'}
      </button>
    </div>
  );
};

