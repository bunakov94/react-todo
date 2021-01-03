import React from 'react';
import { ITodoData } from '../../interfaces';

const Task: React.FC<ITodoData> = ({ status, description, created }: ITodoData) => (
  <li className={status}>
    <div className="view">
      <input className="toggle" type="checkbox" name="input" />
      <label htmlFor="input">
        <span className="description">{description}</span>
        <span className="created">{created}</span>
      </label>
      <button type="button" aria-label="edit" className="icon icon-edit" />
      <button type="button" aria-label="delete" className="icon icon-destroy" />
    </div>
    <input type="text" className="edit" value="Editing task" readOnly />
  </li>
);

export default Task;
