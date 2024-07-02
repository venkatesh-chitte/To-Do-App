import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TASK', id });
  };

  const handleEdit = (id, text) => {
    dispatch({ type: 'EDIT_TASK', id, text });
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item d-flex justify-content-between">
          <span>{task.text}</span>
          <div>
            <button onClick={() => handleDelete(task.id)} className="btn btn-danger btn-sm mr-2">Delete</button>
            <button onClick={() => handleEdit(task.id, prompt('Edit task:', task.text))} className="btn btn-secondary btn-sm">Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;