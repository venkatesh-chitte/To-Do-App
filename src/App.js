import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const App = () => {
  return (
    <div className="container pt-5">
      <h1 className="display-4 text-center">To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;