import { connect } from 'react-redux';

import { AppState } from './../../../../store';

import { deleteTodo, updateTodo } from '../../../../actions/todo/actions';

import { getActiveTodosByTerm } from '../../../../selectors/todo-selectors';

import { ITodo } from '../../../../reducers/todoReducer';

import { TodoListComponent } from './TodoListComponent';

export interface IStateProps {
  todos: ITodo[];
};
export interface IDispatchProps {
  deleteTodo(id: number): void;
  updateTodo(id: number): void;
}

const mapStateToProps = (state: AppState): IStateProps => ({
  todos: getActiveTodosByTerm(state)
});

const mapDispatchToProps = { deleteTodo, updateTodo }

export default connect<IStateProps, IDispatchProps, null, AppState>(mapStateToProps, mapDispatchToProps)(TodoListComponent);