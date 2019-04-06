import { connect } from 'react-redux';
import { AppState } from './../../../../../store';
import { changeActiveFilter } from './../../../../../actions/todo/actions';

import { getActiveFilter, getFilters } from './../../../../../selectors/todo-selectors';
import { TodoFilterComponent } from './TodoFilterComponent';


const mapDispatchToProps = {
  changeActiveFilter
};

const mapStateToProps = (state: AppState) => ({
  activeFilter: getActiveFilter(state),
  filters: getFilters(state),
});

export const TodoFilter = connect(mapStateToProps, mapDispatchToProps)(TodoFilterComponent);