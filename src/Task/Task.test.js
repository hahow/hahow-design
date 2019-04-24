import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};
  
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Task task={task} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
