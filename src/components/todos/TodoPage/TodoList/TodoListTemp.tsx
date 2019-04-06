import * as React from 'react';

import { ITodo } from '../../../../reducers/todoReducer';

import { List } from 'antd';

import styled from 'styled-components';
import { TodoItem } from './TodoItem/TodoItem';
import { IStateProps, IDispatchProps } from './TodoList';

type Props = IStateProps & IDispatchProps;

const StyledList = styled(List)`
  min-height: 168px;
`

export const TodoList: React.FC<Props> = ({ todos, deleteTodo, updateTodo }) => {
  console.log(todos);
  return (
    <StyledList
      size='large'
      bordered
      dataSource={todos}
      renderItem={(todo: ITodo) => (
        <TodoItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      )} />
  )
};
