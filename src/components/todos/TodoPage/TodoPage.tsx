import * as React from 'react';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import './TodoPage.scss';

class TodoPage extends React.Component {
  render() {
    return (
      <div className="todo-page">
        <TodoHeader />
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default TodoPage;