import React, { useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import fetchGraphData from './GetKnowledgeGraphData';

const KnowledgeGraph = () => {
  // Default to first cluster once loaded
  const [selectedCluster, setSelectedCluster] = useState(0);
  const { graphData, clusters } = fetchGraphData(selectedCluster);

  return (
    <div>
      <select value={selectedCluster} onChange={e => setSelectedCluster(Number(e.target.value))}>
        {clusters.map(cluster => (
          <option key={cluster} value={cluster}>{`Cluster ${cluster}`}</option>
        ))}
      </select>
      <ForceGraph2D
        graphData={graphData}
        nodeAutoColorBy="group"
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.label;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          const textWidth = ctx.measureText(label).width;
          const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - fontSize / 2, ...bckgDimensions);

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = node.color;
          ctx.fillText(label, node.x, node.y);

          // to re-use in nodePointerAreaPaint
          node.__bckgDimensions = bckgDimensions;
        }}
        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          const bckgDimensions = node.__bckgDimensions;
          bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
        }}
        linkDirectionalArrowLength={5}
        linkDirectionalArrowRelPos={1}
        linkCurvature={0.25}
        linkLabel="label"
      />
    </div>
  );
};

export default KnowledgeGraph;
