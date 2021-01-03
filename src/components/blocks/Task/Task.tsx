import React from 'react';
import classNames from 'classnames';

interface ITodoDataList {
  isCompleted: boolean;
  isEditing: boolean;
  description: string;
  created: string;
  onChangeStatus: Function;
  onDeleteTodo: Function;
}
const Task: React.FC<ITodoDataList> = ({
  isCompleted,
  isEditing,
  description,
  created,
  onChangeStatus,
  onDeleteTodo,
}: ITodoDataList) => (
  <li className={classNames({ completed: isCompleted, editing: isEditing })}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        name="input"
        defaultChecked={isCompleted}
        onClick={() => onChangeStatus()}
      />
      <label htmlFor="input">
        <span className="description">{description}</span>
        <span className="created">{created}</span>
      </label>
      <button type="button" aria-label="edit" className="icon icon-edit" />
      <button type="button" aria-label="delete" className="icon icon-destroy" onClick={() => onDeleteTodo()} />
    </div>
    <input type="text" className="edit" value="Editing task" readOnly />
  </li>
);

export default Task;
