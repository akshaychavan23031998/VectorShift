import { useState } from 'react';
import { BaseNode, styles } from './BaseNode';

const HANDLES = [
  { id: 'input', type: 'target', position: 'Left' },
  { id: 'output', type: 'source', position: 'Right' },
];

export const TimerNode = ({ id }) => {
  const [delay, setDelay] = useState(1000);

  return (
    <BaseNode id={id} title="Timer" icon="⏱️" accentColor="#f97316" handles={HANDLES}>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Delay (ms)</label>
        <input
          className={styles.fieldInput}
          type="number"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          min={0}
          step={100}
        />
      </div>
      <p className={styles.description}>
        Delays data pass-through by the specified time.
      </p>
    </BaseNode>
  );
};

