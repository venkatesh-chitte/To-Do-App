import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', task: { id: Date.now(), text: task } });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline justify-content-center mb-4">
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="form-control mr-2" placeholder="Enter task" />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default TaskInput;