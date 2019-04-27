import React, { useEffect } from 'react';
import TodoPage from './components/todos/TodoPage/TodoPage';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { AppState } from './redux/store';
import ITodo from './models/todo/ITodo';

interface Props {
  todos: ITodo[]
};

const App: React.FC<Props> = ({ todos }) => {

  useEffect(() => {
    const saveItemsToLocalStorage = () =>
      window.localStorage.setItem('todos', JSON.stringify(todos))

    window.addEventListener('beforeunload', saveItemsToLocalStorage);

    return function () {
      window.removeEventListener('beforeunload', saveItemsToLocalStorage);
    }
  })
  return (
    <Layout>
      <Layout.Content style={{ padding: '50px 0', minHeight: 'calc(100vh - 69px)', background: '#fff' }}>
        <TodoPage />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        ToDo App ©2019 Created by Max Chykalo
      </Layout.Footer>
    </Layout>
  );
}

const mapStateToProps = (state: AppState) => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps)(App);
