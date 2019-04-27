import * as React from 'react';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import './TodoPage.scss';
import { connect } from 'react-redux';
import { fetchTodos } from '../../../redux/actions/todo/actions';

export interface OnMountProps {
  onMount: Function
};

export const withOnMount = <Q extends OnMountProps>(View: React.FC<Q>) => class extends React.Component<Q> {
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return <View {...this.props}/>//<View {...this.props} />;
  }
}

interface Props extends OnMountProps {}

const TodoPage: React.FC<Props> = () => (
  <div className="todo-page">
    <TodoHeader />
    <TodoList />
    <TodoForm />
  </div>
);

export default connect(() => {}, {
  onMount: fetchTodos
})(withOnMount<Props>(TodoPage));
