import React from 'react';
import { Input, Icon, Select } from 'antd';

import { TodoFilter } from './TodoFilter/TodoFilter';
import i18next from 'i18next';
import { TodoStatus } from '../../../../models/todo/TodoStatus';

interface Props {
  activeFilter: TodoStatus;
  filters: TodoStatus[];
  changeActiveFilter(filter: TodoStatus): void;
  searchTermChange(newTerm: string): void;
}
const { Option } = Select;

export const TodoHeaderComponent: React.FC<Props> = ({
  searchTermChange
}) => {
  return (
    <>
      <Select defaultValue="ua" style={{ width: 120 }} onChange={val => i18next.changeLanguage(val)}>
        <Option value="ua">Ukr</Option>
        <Option value="en">Eng</Option>
        <Option value="de" disabled>Deu</Option>
        <Option value="ru" disabled>Rus</Option>
      </Select>
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