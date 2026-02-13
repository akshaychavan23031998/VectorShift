import { useState } from 'react';
import { BaseNode, styles } from './BaseNode';

const HANDLES = [
  { id: 'input', type: 'target', position: 'Left' },
  { id: 'pass', type: 'source', position: 'Right' },
  { id: 'fail', type: 'source', position: 'Right' },
];

export const FilterNode = ({ id }) => {
  const [condition, setCondition] = useState('value > 0');

  return (
    <BaseNode id={id} title="Filter" icon="🔍" accentColor="#10b981" handles={HANDLES}>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Condition</label>
        <input
          className={styles.fieldInput}
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g. value > 0"
        />
      </div>
      <p className={styles.description}>
        Routes data to Pass or Fail based on the condition.
      </p>
    </BaseNode>
  );
};

