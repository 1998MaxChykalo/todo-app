import { connect } from 'react-redux';

import { TodoListComponent } from './TodoListComponent';
import { UpdateTodoModel } from '../../../../dto/update-todo.model';
import ITodo from '../../../../models/todo/ITodo';
import ISortableTodoColumns from '../../../../models/todo/ISortableTodoColumns';
import { AppState } from '../../../../redux/store';
import { getActiveTodosByTerm } from '../../../../redux/selectors/todo-selectors';
import { deleteTodo, updateTodo, sortTodos } from '../../../../redux/actions/todo/actions';

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