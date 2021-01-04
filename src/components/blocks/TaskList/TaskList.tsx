import React from 'react';
import Task from '../Task';

import './TaskList.scss';

interface ITodoDataList {
  isCompleted: boolean;
  isEditing: boolean;
  description: string;
  created: string;
  id: number;
}

type TodoListProps = {
  todos: ITodoDataList[];
  makeCompleted: Function;
  deleteTodoItem: Function;
};

const TaskList: React.FC<TodoListProps> = ({ todos, makeCompleted, deleteTodoItem }: TodoListProps) => (
  <ul className="todo-list">
    {todos.map((item) => (
      <Task
        {...item}
        key={item.id}
        makeCompleted={() => makeCompleted(item.id)}
        deleteTodoItem={() => deleteTodoItem(item.id)}
      />
    ))}
  </ul>
);

export default TaskList;
