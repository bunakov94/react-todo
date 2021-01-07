import React from 'react';
import classNames from 'classnames';
import Task from '../Task';
import { TaskListProps } from '../../interfaces';

import './TaskList.scss';

const TaskList: React.FC<TaskListProps> = ({
  filteredTasks,
  makeTaskCompleted,
  deleteTask,
  editTask,
  updateTask,
}: TaskListProps) => (
  <ul className="todo-list">
    {filteredTasks.length ? (
      filteredTasks.map((item) => (
        <li key={item.id} className={classNames({ completed: item.isCompleted, editing: item.isEditing })}>
          <Task
            {...item}
            makeTaskCompleted={() => makeTaskCompleted(item.id)}
            deleteTask={() => deleteTask(item.id)}
            editTask={() => editTask(item.id)}
            updateTask={updateTask}
          />
        </li>
      ))
    ) : (
      <li>
        <h2 className="nothing">There is nothing here yet</h2>
      </li>
    )}
  </ul>
);

export default TaskList;
