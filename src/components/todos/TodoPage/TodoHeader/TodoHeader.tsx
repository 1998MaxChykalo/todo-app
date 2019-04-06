import { connect } from 'react-redux';

import { AppState } from '../.././../../store';
import { changeActiveFilter, updateSearchTerm, searchTermChange } from './../../../../actions/todo/actions';
import { getActiveFilter, getFilters } from './../../../../selectors/todo-selectors';

import { TodoHeaderComponent } from './TodoHeaderComponent';

const mapDispatchToProps = {
  changeActiveFilter,
  updateSearchTerm,
  searchTermChange
};

const mapStateToProps = (state: AppState) => ({
  activeFilter: getActiveFilter(state),
  filters: getFilters(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeaderComponent);