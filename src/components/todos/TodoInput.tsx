import React from 'react';

import { Input } from 'antd';

interface Props {
  onChange(e: any): void;
  value: string;
};

export const TodoInput: React.FC<Props> = ({ onChange, value }) => (
  <div className="todo-input-wrapper">
    {/* <Icon type="plus" /> */}
    <Input
      prefix={<i className="fa fa-plus"></i>}
      size='large'
      type="text"
      onChange={onChange}
      value={value}
      className="todo-input" />
  </div>
);