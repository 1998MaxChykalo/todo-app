import * as React from 'react';

import { Table, Icon, Tag, Form, Radio } from 'antd';

import { IStateProps, IDispatchProps } from './TodoList';

import { useTranslation } from 'react-i18next';

import './TodoItem/TodoItem.scss';
import { formatTime } from '../../../../selectors/todo-selectors';
import FormItem from 'antd/lib/form/FormItem';
import { TodoStatus } from '../../../../models/todo/TodoStatus';
import ITodo from '../../../../models/todo/ITodo';
type Props = IStateProps & IDispatchProps;

export const TodoListComponent: React.FC<Props> = ({ todos, deleteTodo, updateTodo, sortTodos }) => {

  const { t, i18n } = useTranslation();
  const columns = [
    {
      align: 'center' as 'center',
      title: t('todo', {returnObjects: true})['text' as any],
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
      title: t('todo', {returnObjects: true})['status' as any],
      dataIndex: 'status',
      key: 'status',
      render: (status: number) => (
        <span className='todo__item__status'>{t(TodoStatus[status])}</span>
      )
    },
    {
      align: 'center' as 'center',
      title: t('todo', {returnObjects: true})['createdAt' as any],
      dataIndex: 'createdAt',
      key: 'createdAt',
      // defaultSortOrder: 'descend',
      sorter: (a: ITodo, b: ITodo) =>  a.createdAt > b.createdAt ? 1 : -1,
      render: (date: Date) => <span>{new Date(date).toLocaleDateString()}</span>
    },
    {
      align: 'center' as 'center',
      title: t('todo', {returnObjects: true})['tags' as any],
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
      title: t('todo', {returnObjects: true})['estimatedTime' as any],
      dataIndex: "estimatedTime",
      key: 'estimatedTime',
      render: (estimatedTime: number) => (
        <span>
          {formatTime(estimatedTime)}
        </span>
      )
    },
    {
      align: 'center' as 'center',
      title: t('todo', {returnObjects: true})['left' as any],
      dataIndex: "timeTillEnd",
      key: 'timeTillEnd',
      render: (timeTillEnd: number, todo: ITodo) => (
        <span>
          {formatTime(timeTillEnd)}
        </span>
      )
    },
    {
      align: 'center' as 'center',
      title: t('todo', {returnObjects: true})['actions' as any],
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
        <FormItem label={t('sortBy')}>
      <Radio.Group size="default" onChange={(e) => sortTodos(e.target.value)}>
        <Radio.Button value="createdAt">{t('date')}</Radio.Button>
        <Radio.Button value="text">{t('text')}</Radio.Button>
        <Radio.Button value="estimatedTime">{t('estimatedTime')}</Radio.Button>
      </Radio.Group>
    </FormItem>
  </Form>
    <Table rowClassName={(record: ITodo) => record.status === TodoStatus.Completed ? 'todo__item--completed' : ''} columns={columns} dataSource={todos} pagination={false} />
    </>
  )
};