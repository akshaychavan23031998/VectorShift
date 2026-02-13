import { useState } from 'react';
import { BaseNode, styles } from './BaseNode';

const HANDLES = [
  { id: 'value', type: 'source', position: 'Right' },
];

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode id={id} title="Input" icon="📥" accentColor="#6366f1" handles={HANDLES}>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Name</label>
        <input
          className={styles.fieldInput}
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Type</label>
        <select
          className={styles.fieldSelect}
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};
