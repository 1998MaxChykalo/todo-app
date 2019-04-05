import * as React from 'react';
import TodoListContainer from './../TodoList/TodoListContainer';
import TodoFilterContainer from './../TodoFilter';
import TodoFormContainer from './../TodoForm/TodoFormContainer';

import './TodoPage.scss';

class TodoPage extends React.Component {
  render() {
    return (
      <div className="todo-page">
        <TodoFilterContainer />
        <TodoListContainer />
        <TodoFormContainer />
      </div>
    );
  }
}

export default TodoPage;