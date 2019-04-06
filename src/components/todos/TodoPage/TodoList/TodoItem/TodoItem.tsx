import * as React from 'react';
import { ITodo } from './../../../../../reducers/todoReducer';
import { List, Icon } from 'antd';

import './TodoItem.scss';

interface TodoItemProps {
  todo: ITodo;
  deleteTodo(id: number): void;
  updateTodo(id: number): void;
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, updateTodo }) => (
  <List.Item
    actions={[
      <Icon
        className="todo__item__icon todo__item__icon--toggle"
        onClick={() => updateTodo(todo.id)}
        type={todo.isCompleted ? "close-circle" : 'check-circle'} />,
      <Icon
        className="todo__item__icon todo__item__icon--delete"
        onClick={() => deleteTodo(todo.id)}
        type="delete" />
    ]}
    className={`todo__item ${todo.isCompleted ? 'todo__item--completed' : ''}`}>
    <p className="todo__item__text">
      {todo.text}
      {todo.createdAt && (' Created At: ' + new Date(todo.createdAt).toLocaleDateString()) || null}
    </p>
  </List.Item>
);