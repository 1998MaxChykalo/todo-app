import React from 'react';
import { Input, Icon } from 'antd';

import { TodoStatus } from '../../../../reducers/todoReducer';
import { TodoFilter } from './TodoFilter/TodoFilter';

interface Props {
  activeFilter: TodoStatus;
  filters: TodoStatus[];
  changeActiveFilter(filter: TodoStatus): void;
  // updateSearchTerm(newTerm: string): void;
  searchTermChange(newTerm: string): void;
}

export const TodoHeaderComponent: React.FC<Props> = ({
  // updateSearchTerm
  searchTermChange
}) => {
  return (
    <>
      <Input
        className='my-3'
        onChange={(e) => searchTermChange(e.target.value)}
        prefix={<Icon type="search" />}
        size='large'
        type="text" />
      <TodoFilter />
    </>
  );
}