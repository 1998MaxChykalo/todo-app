import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { changeActiveFilter } from '../../actions/todo/actions';
import { TodoFilter } from '../../reducers/todoReducer';

import { Radio } from 'antd';
import { getActiveFilter, getFilters } from '../../selectors/todo-selectors';

interface Props {
  activeFilter: TodoFilter;
  filters: TodoFilter[];
  onActiveFilterChange(filter: TodoFilter): void;
}


const TodoFilterComponent: React.FC<Props> = ({ activeFilter, filters, onActiveFilterChange }) => {
  
  const filtersMarkup = filters.map(
    filter => (
      <Radio.Button
        key={filter}
        style={{width: '33.33%', textAlign: 'center'}}
        value={filter}>
        {TodoFilter[filter]}
      </Radio.Button>
    )
  );
  return (
    <Radio.Group
      style={{width: '100%'}}  
      size='large'
      value={activeFilter}
      onChange={(e) => onActiveFilterChange(e.target.value)}
      buttonStyle="solid">
      {filtersMarkup}
    </Radio.Group>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  onActiveFilterChange: (newActiveFilter: TodoFilter) => {
    dispatch(changeActiveFilter(newActiveFilter));
  }
});
const mapStateToProps = (state: AppState) => ({
  activeFilter: getActiveFilter(state),
  filters: getFilters(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilterComponent);