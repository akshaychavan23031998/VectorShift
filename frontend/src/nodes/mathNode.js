import { useState } from 'react';
import { BaseNode, styles } from './BaseNode';

const HANDLES = [
  { id: 'a', type: 'target', position: 'Left' },
  { id: 'b', type: 'target', position: 'Left' },
  { id: 'result', type: 'source', position: 'Right' },
];

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState('add');

  return (
    <BaseNode id={id} title="Math" icon="🔢" accentColor="#ec4899" handles={HANDLES}>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Operation</label>
        <select
          className={styles.fieldSelect}
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (−)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
          <option value="modulo">Modulo (%)</option>
        </select>
      </div>
      <p className={styles.description}>
        Performs arithmetic on inputs A and B.
      </p>
    </BaseNode>
  );
};

