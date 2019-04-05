import { connect } from 'react-redux';
import { TodoForm } from './TodoFormComponent';
import { addTodo } from '../../../actions/todo/actions';
import { CreateTodoModel } from '../../../dto/create-todo.model';

interface DispatchFromProps {
  addTodo(values: CreateTodoModel): void;
}

const mapDispatchToProps = {
  addTodo
};

const mapStateToProps = () => ({});

export default connect<{}, DispatchFromProps>(
  () => ({}),
  mapDispatchToProps
)(TodoForm);


