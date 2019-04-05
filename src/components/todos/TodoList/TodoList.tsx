import * as React from 'react';

import { ITodo } from '../../../reducers/todoReducer';

import { List } from 'antd';

import './TodoList.scss';
import { TodoItem } from '../TodoItem/TodoItem';
import { IStateProps, IDispatchProps } from './TodoListContainer';

type Props = IStateProps & IDispatchProps;

export const TodoList: React.FC<Props> = ({ todos, deleteTodo, updateTodo }) => {
  console.log(todos);
  return (
    <List
      className='todo__list'
      size='large'
      bordered
      dataSource={todos}
      renderItem={(todo: ITodo) => (
        <TodoItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      )} />
  )
};
