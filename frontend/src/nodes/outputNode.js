import { useState } from 'react';
import { BaseNode, styles } from './BaseNode';

const HANDLES = [
  { id: 'value', type: 'target', position: 'Left' },
];

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode id={id} title="Output" icon="📤" accentColor="#8b5cf6" handles={HANDLES}>
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
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};
