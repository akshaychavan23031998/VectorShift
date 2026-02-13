import { useState } from 'react';
import { BaseNode, styles } from './BaseNode';

const HANDLES = [
  { id: 'input-1', type: 'target', position: 'Left' },
  { id: 'input-2', type: 'target', position: 'Left' },
  { id: 'input-3', type: 'target', position: 'Left' },
  { id: 'output', type: 'source', position: 'Right' },
];

export const MergeNode = ({ id }) => {
  const [strategy, setStrategy] = useState('concat');

  return (
    <BaseNode id={id} title="Merge" icon="🔀" accentColor="#14b8a6" handles={HANDLES}>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Strategy</label>
        <select
          className={styles.fieldSelect}
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
        >
          <option value="concat">Concatenate</option>
          <option value="first">First Non-Empty</option>
          <option value="last">Last Non-Empty</option>
          <option value="join">Join with Separator</option>
        </select>
      </div>
      <p className={styles.description}>
        Merges up to 3 inputs into a single output.
      </p>
    </BaseNode>
  );
};

