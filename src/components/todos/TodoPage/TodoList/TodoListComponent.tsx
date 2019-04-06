import * as React from 'react';

import { ITodo, TodoStatus } from './../../../../reducers/todoReducer';

import { Table, Icon, Tag } from 'antd';

import { IStateProps, IDispatchProps } from './TodoList';

import './TodoItem/TodoItem.scss';

type Props = IStateProps & IDispatchProps;

export const TodoListComponent: React.FC<Props> = ({ todos, deleteTodo, updateTodo }) => {
  const columns = [
    {
      title: 'text',
      dataIndex: 'text',
      key: 'text',
      render: (text: string) => (
        <span className='todo__item__text'>{text}</span>
      )
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      render: (status: number) => (
        <span className='todo__item__status'>{TodoStatus[status]}</span>
      )
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => <span>{new Date(date).toLocaleDateString()}</span>
    },
    {
      title: 'Tags',
      dataIndex: "tags",
      key: 'tags',
      render: (tags: string[]) => (
        <span>
          {tags && tags.map(tag => <Tag color="blue" key={tag}>#{tag}</Tag>)}
        </span>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: ITodo) => {
        console.log(record.status, TodoStatus.Completed)
        return <span className='todo__item__icons'>
          <Icon
            className="todo__item__icon todo__item__icon--toggle"
            onClick={() => updateTodo(record.id)}
            type={record.status === TodoStatus.Completed ? "close-circle" : 'check-circle'} />
          <Icon
            className="todo__item__icon todo__item__icon--delete"
            onClick={() => deleteTodo(record.id)}
            type="delete" />
        </span>
      }
    }
  ];
  return <Table rowClassName={(record: ITodo) => record.status === TodoStatus.Completed ? 'todo__item--completed' : ''} columns={columns} dataSource={todos} pagination={false} />
};