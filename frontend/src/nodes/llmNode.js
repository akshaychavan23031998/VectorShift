import { BaseNode, styles } from './BaseNode';

const HANDLES = [
  { id: 'system', type: 'target', position: 'Left' },
  { id: 'prompt', type: 'target', position: 'Left' },
  { id: 'response', type: 'source', position: 'Right' },
];

export const LLMNode = ({ id }) => {
  return (
    <BaseNode id={id} title="LLM" icon="🤖" accentColor="#0ea5e9" handles={HANDLES}>
      <p className={styles.description}>
        This is a Large Language Model node. Connect a system prompt and a user prompt to generate a response.
      </p>
    </BaseNode>
  );
};
