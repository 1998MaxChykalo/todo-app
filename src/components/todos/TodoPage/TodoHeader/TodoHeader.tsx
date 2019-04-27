import { connect } from 'react-redux';

import { TodoHeaderComponent } from './TodoHeaderComponent';
import { changeActiveFilter, updateSearchTerm, searchTermChange } from '../../../../redux/actions/todo/actions';
import { AppState } from '../../../../redux/store';
import { getActiveFilter, getFilters } from '../../../../redux/selectors/todo-selectors';

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