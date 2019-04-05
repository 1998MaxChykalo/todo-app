import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from './../../../store';

import { deleteTodo, updateTodo } from '../../../actions/todo/actions';

import { getActiveTodos } from '../../../selectors/todo-selectors';

import { ITodo, TodoFilter } from '../../../reducers/todoReducer';
// import { TodoList } from './TodoList';
import { TodoList } from './TodoListTable';

export interface IStateProps {
  todos: ITodo[];
};

export interface IDispatchProps {
  deleteTodo(id: number): void;
  updateTodo(id: number): void;
}

const mapStateToProps = (state: AppState): IStateProps => ({
  todos: getActiveTodos(state)
});

const mapDispatchToProps = { deleteTodo, updateTodo }

export default connect<IStateProps, IDispatchProps, null, AppState>(mapStateToProps, mapDispatchToProps)(TodoList);