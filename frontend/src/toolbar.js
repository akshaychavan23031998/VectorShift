import { DraggableNode } from './draggableNode';

const NODE_ITEMS = [
  { type: 'customInput', label: 'Input', icon: '📥' },
  { type: 'llm', label: 'LLM', icon: '🤖' },
  { type: 'customOutput', label: 'Output', icon: '📤' },
  { type: 'text', label: 'Text', icon: '📝' },
  { type: 'filter', label: 'Filter', icon: '🔍' },
  { type: 'math', label: 'Math', icon: '🔢' },
  { type: 'merge', label: 'Merge', icon: '🔀' },
  { type: 'timer', label: 'Timer', icon: '⏱️' },
  { type: 'api', label: 'API', icon: '🌐' },
];

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-title">Pipeline Builder</div>
      <div className="toolbar-nodes">
        {NODE_ITEMS.map((item) => (
          <DraggableNode
            key={item.type}
            type={item.type}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
