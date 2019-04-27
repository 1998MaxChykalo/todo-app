import { connect } from 'react-redux';
import { TodoForm } from './TodoFormComponent';
import { CreateTodoModel } from '../../../../dto/create-todo.model';
import { addTodo } from '../../../../redux/actions/todo/actions';

interface DispatchFromProps {
  addTodo(values: CreateTodoModel): void;
}

export default connect<{}, DispatchFromProps>(
  () => ({}),
  { addTodo }
)(TodoForm);


