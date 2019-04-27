import { connect } from 'react-redux';

import { TodoFilterComponent } from './TodoFilterComponent';
import { changeActiveFilter } from '../../../../../redux/actions/todo/actions';
import { AppState } from '../../../../../redux/store';
import { getActiveFilter, getFilters } from '../../../../../redux/selectors/todo-selectors';


const mapDispatchToProps = {
  changeActiveFilter
};

const mapStateToProps = (state: AppState) => ({
  activeFilter: getActiveFilter(state),
  filters: getFilters(state),
});

export const TodoFilter = connect(mapStateToProps, mapDispatchToProps)(TodoFilterComponent);