import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://vectorshift-api.onrender.com/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      const dagStatus = data.is_dag ? '✅ Yes' : '❌ No';
      alert(
        `Pipeline Analysis\n\n` +
        `Nodes: ${data.num_nodes}\n` +
        `Edges: ${data.num_edges}\n` +
        `Is DAG: ${dagStatus}`
      );
    } catch (error) {
      alert(`Failed to analyze pipeline.\n\n${error.message}`);
    }
  };

  return (
    <div className="submit-bar">
      <button className="submit-button" type="button" onClick={handleSubmit}>
        Submit Pipeline
      </button>
    </div>
  );
};
