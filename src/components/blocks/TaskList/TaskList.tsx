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
  onDone: Function;
  onDelete: Function;
};

const TaskList: React.FC<TodoListProps> = ({ todos, onDone, onDelete }: TodoListProps) => (
  <ul className="todo-list">
    {todos.map((item) => (
      <Task {...item} key={item.id} onChangeStatus={() => onDone(item.id)} onDeleteTodo={() => onDelete(item.id)} />
    ))}
  </ul>
);

export default TaskList;
