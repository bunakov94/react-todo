import React from 'react';
import Task from '../Task';

import './TaskList.scss';

interface ITodoDataList {
  isCompleted: boolean;
  isEditing: boolean;
  todoText: string;
  timeOfCreation: Date;
  id: string;
}

type TodoListProps = {
  todoArr: ITodoDataList[];
  makeTodoCompleted: Function;
  deleteTodo: Function;
};

const TaskList: React.FC<TodoListProps> = ({ todoArr, makeTodoCompleted, deleteTodo }: TodoListProps) => (
  <ul className="todo-list">
    {todoArr.map((item) => (
      <Task
        {...item}
        key={item.id}
        makeTodoCompleted={() => makeTodoCompleted(item.id)}
        deleteTodo={() => deleteTodo(item.id)}
      />
    ))}
  </ul>
);

export default TaskList;
