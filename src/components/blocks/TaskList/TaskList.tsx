import React from 'react';
import Task from '../Task';
import { ITodoData } from '../../interfaces';

import './TaskList.scss';

type TodoListProps = {
  todos: ITodoData[];
};

const TaskList: React.FC<TodoListProps> = ({ todos }: TodoListProps) => (
  <ul className="todo-list">
    {todos.map((item) => (
      <Task {...item} key={item.id} />
    ))}
  </ul>
);

export default TaskList;
