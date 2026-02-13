import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode, styles } from './BaseNode';

const VARIABLE_REGEX = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;
const MIN_WIDTH = 250;
const MAX_WIDTH = 400;
const MIN_HEIGHT = 40;
const MAX_HEIGHT = 300;
const CHAR_WIDTH = 7.8;
const LINE_HEIGHT = 20;

const parseVariables = (text) => {
  const vars = new Set();
  let match;
  while ((match = VARIABLE_REGEX.exec(text)) !== null) {
    vars.add(match[1]);
  }
  return [...vars];
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  const variables = useMemo(() => parseVariables(currText), [currText]);

  const computedDimensions = useMemo(() => {
    const lines = currText.split('\n');
    const longestLine = Math.max(...lines.map((l) => l.length));
    const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, longestLine * CHAR_WIDTH + 40));
    const height = Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, lines.length * LINE_HEIGHT + 10));
    return { width, height };
  }, [currText]);

  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, el.scrollHeight))}px`;
  }, []);

  useEffect(() => {
    resizeTextarea();
  }, [currText, resizeTextarea]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const staticHandles = [
    { id: 'output', type: 'source', position: 'Right' },
  ];

  return (
    <BaseNode
      id={id}
      title="Text"
      icon="📝"
      accentColor="#f59e0b"
      handles={staticHandles}
      style={{ width: computedDimensions.width }}
    >
      <div className={styles.field}>
        <label className={styles.fieldLabel}>Text</label>
        <textarea
          ref={textareaRef}
          className={styles.fieldTextarea}
          value={currText}
          onChange={handleTextChange}
          style={{
            width: computedDimensions.width - 44,
            minHeight: MIN_HEIGHT,
          }}
          placeholder="Type text... use {{variableName}} for variables"
        />
      </div>
      {variables.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {variables.map((v) => (
            <span
              key={v}
              style={{
                fontSize: 10,
                padding: '2px 6px',
                background: '#fef3c7',
                color: '#92400e',
                borderRadius: 4,
                fontFamily: 'var(--font-mono)',
              }}
            >
              {v}
            </span>
          ))}
        </div>
      )}
      {variables.map((varName, index) => {
        const total = variables.length;
        const spacing = 100 / (total + 1);
        const topPercent = spacing * (index + 1);
        return (
          <Handle
            key={`var-${varName}`}
            type="target"
            position={Position.Left}
            id={`${id}-var-${varName}`}
            style={{ top: `${topPercent}%` }}
          />
        );
      })}
    </BaseNode>
  );
};
