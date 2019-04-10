import * as React from 'react';

import { ITodo, TodoStatus } from './../../../../reducers/todoReducer';

import { Table, Icon, Tag } from 'antd';

import { IStateProps, IDispatchProps } from './TodoList';

import { useTranslation } from 'react-i18next';

import './TodoItem/TodoItem.scss';
import { formatTime } from '../../../../selectors/todo-selectors';

type Props = IStateProps & IDispatchProps;

export const TodoListComponent: React.FC<Props> = ({ todos, deleteTodo, updateTodo }) => {

  const { t, i18n } = useTranslation();
  React.useEffect(() => {

    const isInProgress = (todo: ITodo) => todo.status === TodoStatus['In Progress'];
    const exist = <T, K extends keyof T>(prop: K, obj: T) => (obj[prop]) !== null && (obj[prop]) !== undefined;
    const interval = setInterval(() => todos.filter(isInProgress).map(todo => {

      if (todo.timeTillEnd) {
        updateTodo({ id: todo.id, timeTillEnd: todo.timeTillEnd - 1000 < 0 ? 0 : todo.timeTillEnd - 1000 })
      }
    }), 1000);

    return () => clearInterval(interval);
  });

  const columns = [
    {
      title: t('text'),
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
      title: 'Estimated Time',
      dataIndex: "estimatedTime",
      key: 'estimatedTime',
      render: (estimatedTime: number) => (
        <span>
          {estimatedTime && formatTime(estimatedTime)}
        </span>
      )
    },
    {
      title: 'Left',
      dataIndex: "timeTillEnd",
      key: 'timeTillEnd',
      render: (timeTillEnd: number) => (
        <span>
          {timeTillEnd && formatTime(timeTillEnd)}
        </span>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: ITodo) => {
        return <span className='todo__item__icons'>
          <Icon
            className="todo__item__icon todo__item__icon--toggle"
            onClick={() => updateTodo({ id: record.id, status: record.status === TodoStatus["In Progress"] ? TodoStatus.Paused : TodoStatus["In Progress"] })}
            type={record.status === TodoStatus["In Progress"] ? "pause" : 'caret-right'} />
          <Icon
            className="todo__item__icon todo__item__icon--toggle"
            onClick={() => updateTodo({ id: record.id, status: record.status === TodoStatus.Completed ? TodoStatus.Active : TodoStatus.Completed })}
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