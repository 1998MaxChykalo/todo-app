import * as React from 'react';

import { ITodo, TodoStatus } from './../../../../reducers/todoReducer';

import { Table, Icon, Tag, Form, Radio } from 'antd';

import { IStateProps, IDispatchProps } from './TodoList';

import { useTranslation } from 'react-i18next';

import './TodoItem/TodoItem.scss';
import { formatTime } from '../../../../selectors/todo-selectors';
import FormItem from 'antd/lib/form/FormItem';
import {ColumnProps} from 'antd/lib/table';
type Props = IStateProps & IDispatchProps;

export const TodoListComponent: React.FC<Props> = ({ todos, deleteTodo, updateTodo, sortTodos }) => {

  const { t, i18n } = useTranslation();
  React.useEffect(() => {

    const isInProgress = (todo: ITodo) => todo.status === TodoStatus['In Progress'];
    const interval = setInterval(() => todos.filter(isInProgress).map(todo => {

      if (todo.timeTillEnd) {
        updateTodo({ id: todo.id, timeTillEnd: todo.timeTillEnd - 1000 < 0 ? 0 : todo.timeTillEnd - 1000 })
      }
    }), 1000);

    return () => clearInterval(interval);
  });
  const columns = [
    {
      align: 'center' as 'center',
      title: t('text'),
      dataIndex: 'text',
      key: 'text',
      // defaultSortOrder: 'descend',
      sorter: (a: ITodo, b: ITodo) => a.text.length - b.text.length,
      render: (text: string) => (
        <span className='todo__item__text'>{text}</span>
      )
    },
    {
      align: 'center' as 'center',
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      render: (status: number) => (
        <span className='todo__item__status'>{TodoStatus[status]}</span>
      )
    },
    {
      align: 'center' as 'center',
      title: 'createdAt',
      dataIndex: 'createdAt',
      key: 'createdAt',
      // defaultSortOrder: 'descend',
      sorter: (a: ITodo, b: ITodo) =>  a.createdAt > b.createdAt ? 1 : -1,
      render: (date: Date) => <span>{new Date(date).toLocaleDateString()}</span>
    },
    {
      align: 'center' as 'center',
      title: 'Tags',
      dataIndex: "tags",
      key: 'tags',
      render: (tags: string[]) => (
        <span>
          {tags.length > 0 ? tags.map(tag => <Tag color="blue" key={tag}>#{tag}</Tag>) : '-'}
        </span>
      )
    },
    {
      align: 'center' as 'center',
      title: 'Estimated Time',
      dataIndex: "estimatedTime",
      key: 'estimatedTime',
      render: (estimatedTime: number) => (
        <span>
          {estimatedTime > 0 ? formatTime(estimatedTime) : '-'}
        </span>
      )
    },
    {
      align: 'center' as 'center',
      title: 'Left',
      dataIndex: "timeTillEnd",
      key: 'timeTillEnd',
      render: (timeTillEnd: number) => (
        <span>
          {timeTillEnd > 0 ? formatTime(timeTillEnd) : '-'}
        </span>
      )
    },
    {
      align: 'center' as 'center',
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
  
  return (
    <>
    <Form layout="inline">
        <FormItem label="Sort By">
      <Radio.Group size="default" onChange={(e) => sortTodos(e.target.value)}>
        <Radio.Button value="createdAt">Date</Radio.Button>
        <Radio.Button value="text">Name</Radio.Button>
        <Radio.Button value="estimatedTime">Estimated Time</Radio.Button>
      </Radio.Group>
    </FormItem>
  </Form>
    <Table rowClassName={(record: ITodo) => record.status === TodoStatus.Completed ? 'todo__item--completed' : ''} columns={columns} dataSource={todos} pagination={false} />
    </>
  )
};