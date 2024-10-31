import React from 'react';
import { Handle } from 'reactflow';

const BaseNode = ({ 
  data, 
  nodeType, 
  handles = { left: [], right: [] },
  children,
  className = ''
}) => {
  return (
    <div className={`rounded-lg border-2 bg-white p-4 min-w-[200px] shadow-md ${className}`}>
      {/* Node Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-gray-700">{nodeType}</span>
        {data?.title && <span className="text-sm text-gray-500">{data.title}</span>}
      </div>

      {/* Left Handles */}
      {handles.left.map((handle, index) => (
        <Handle
          key={`left-${index}`}
          type="target"
          position="left"
          id={handle.id}
          style={{ top: 40 + (index * 20) }}
        />
      ))}

      {/* Right Handles */}
      {handles.right.map((handle, index) => (
        <Handle
          key={`right-${index}`}
          type="source"
          position="right"
          id={handle.id}
          style={{ top: 40 + (index * 20) }}
        />
      ))}

      {/* Node Content */}
      <div className="mt-2">
        {children}
      </div>
    </div>
  );
};

export default BaseNode;