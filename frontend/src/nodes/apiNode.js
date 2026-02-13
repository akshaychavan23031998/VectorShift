import { useState } from 'react';
import { BaseNode, styles } from './BaseNode';

const HANDLES = [
  { id: 'body', type: 'target', position: 'Left' },
  { id: 'response', type: 'source', position: 'Right' },
];

export const APINode = ({ id }) => {
  const [url, setUrl] = useState('https://api.example.com');
  const [method, setMethod] = useState('GET');

  return (
    <BaseNode id={id} title="API Request" icon="🌐" accentColor="#6d28d9" handles={HANDLES}>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>URL</label>
        <input
          className={styles.fieldInput}
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://..."
        />
      </div>
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Method</label>
        <select
          className={styles.fieldSelect}
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
          <option value="PATCH">PATCH</option>
        </select>
      </div>
    </BaseNode>
  );
};

