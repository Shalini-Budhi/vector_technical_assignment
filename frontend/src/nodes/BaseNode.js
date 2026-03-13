import { Handle, Position } from 'reactflow';

const defaultContainerStyle = {
  minWidth: 220,
  minHeight: 90,
  borderRadius: 8,
  border: '1px solid #1F2933',
  backgroundColor: '#0B1120',
  color: '#E5E7EB',
  boxShadow: '0 8px 20px rgba(15, 23, 42, 0.35)',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 12px',
  boxSizing: 'border-box',
};

const headerStyle = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: '#9CA3AF',
  marginBottom: 6,
};

const bodyStyle = {
  fontSize: 13,
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
};

/**
 * BaseNode
 * Reusable shell for all node types.
 *
 * Props:
 * - id: string (React Flow node id)
 * - title: string
 * - inputHandles: [{ key, idSuffix, topPercent }]
 * - outputHandles: [{ key, idSuffix, topPercent }]
 * - children: node-specific content
 * - style: optional style overrides for outer container
 */
export const BaseNode = ({
  id,
  title,
  inputHandles = [],
  outputHandles = [],
  children,
  style = {},
}) => {
  const mergedStyle = { ...defaultContainerStyle, ...style };

  return (
    <div style={mergedStyle}>
      {inputHandles.map((h) => (
        <Handle
          key={h.key}
          type="target"
          position={Position.Left}
          id={`${id}-${h.idSuffix}`}
          style={{ top: `${h.topPercent}%` }}
        />
      ))}

      <div style={headerStyle}>{title}</div>

      <div style={bodyStyle}>{children}</div>

      {outputHandles.map((h) => (
        <Handle
          key={h.key}
          type="source"
          position={Position.Right}
          id={`${id}-${h.idSuffix}`}
          style={h.topPercent != null ? { top: `${h.topPercent}%` } : undefined}
        />
      ))}
    </div>
  );
};

