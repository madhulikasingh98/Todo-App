import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} updateTask={updateTask} />
      ))}
    </ul>
  );
};

export default TaskList;
