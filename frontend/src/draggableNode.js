// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '88px', 
          height: '56px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '999px',
          background: 'linear-gradient(135deg, #0EA5E9, #6366F1)',
          justifyContent: 'center', 
          flexDirection: 'column',
          color: '#0B1120',
          fontWeight: 600,
          fontSize: 13,
          boxShadow: '0 8px 18px rgba(37, 99, 235, 0.55)',
          padding: '0 10px'
        }} 
        draggable
      >
          <span>{label}</span>
      </div>
    );
  };