import { connect } from 'react-redux';

import { AppState } from './../../../../store';

import { deleteTodo, updateTodo, sortTodos } from '../../../../actions/todo/actions';

import { getActiveTodosByTerm } from '../../../../selectors/todo-selectors';

import { ITodo, ISortableTodoColumns } from '../../../../reducers/todoReducer';

import { TodoListComponent } from './TodoListComponent';
import { UpdateTodoModel } from '../../../../dto/update-todo.model';

export interface IStateProps { 
  todos: ITodo[];
};
export interface IDispatchProps {
  deleteTodo(id: number): void;
  updateTodo(updateTodoModel: UpdateTodoModel): void;
  sortTodos(column: keyof ISortableTodoColumns): void;
}

const mapStateToProps = (state: AppState): IStateProps => ({
  todos: getActiveTodosByTerm(state)
});

const mapDispatchToProps = { deleteTodo, updateTodo, sortTodos }

export default connect<IStateProps, IDispatchProps, null, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent);