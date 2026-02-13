import { Handle, Position } from 'reactflow';
import styles from './BaseNode.module.css';

const POSITION_MAP = {
  Left: Position.Left,
  Right: Position.Right,
  Top: Position.Top,
  Bottom: Position.Bottom,
};

const getHandleStyle = (handle, index, totalSamePosition) => {
  if (handle.style) return handle.style;
  if (totalSamePosition <= 1) return {};
  const spacing = 100 / (totalSamePosition + 1);
  return { top: `${spacing * (index + 1)}%` };
};

export const BaseNode = ({ id, title, icon, accentColor = '#6366f1', handles = [], children }) => {
  const positionGroups = {};
  handles.forEach((h) => {
    const pos = h.position || 'Left';
    if (!positionGroups[pos]) positionGroups[pos] = [];
    positionGroups[pos].push(h);
  });

  return (
    <div className={styles.nodeCard}>
      <div className={styles.header} style={{ background: accentColor }}>
        {icon && <span className={styles.headerIcon}>{icon}</span>}
        <span>{title}</span>
      </div>
      <div className={styles.body}>
        {children}
      </div>
      {handles.map((handle) => {
        const group = positionGroups[handle.position || 'Left'];
        const indexInGroup = group.indexOf(handle);
        return (
          <Handle
            key={handle.id}
            type={handle.type}
            position={POSITION_MAP[handle.position || 'Left']}
            id={`${id}-${handle.id}`}
            style={getHandleStyle(handle, indexInGroup, group.length)}
          />
        );
      })}
    </div>
  );
};

export { styles };

