import React, { useState } from 'react';

const TaskItem = ({ task, updateTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCompletion = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <li>
      <div>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={handleCompletion} 
        />
        <span onClick={toggleExpand}>
          {task.title}
        </span>
      </div>
      {isExpanded && (
        <div>
          <p>{task.description}</p>
          <p>Last updated: {new Date(task.lastUpdated).toLocaleString()}</p>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
