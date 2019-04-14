import * as React from 'react';

import styled from "styled-components";

import { Radio } from 'antd';
import { useTranslation } from 'react-i18next';
import { TodoStatus } from '../../../../../models/todo/TodoStatus';

interface Props {
  activeFilter: TodoStatus;
  filters: TodoStatus[];
  changeActiveFilter(filter: TodoStatus): void;
}

const RadioButton = styled(Radio.Button)`
  flex: 1;
  text-align: center;
`;

const RadioGroup = styled(Radio.Group)`
  display: flex !important;
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TodoFilterComponent: React.FC<Props> = ({ activeFilter, filters, changeActiveFilter }) => {
  const { t, i18n } = useTranslation();

  const filtersMarkup = filters.map(
    filter => (
      <RadioButton
        key={filter}
        value={filter}>
        {t('todo',{returnObjects: true})['statuses' as any][TodoStatus[filter] as any]}
      </RadioButton>
    )
  );
  return (
    <RadioGroup
      size='large'
      value={activeFilter}
      onChange={(e) => changeActiveFilter(e.target.value)}
      buttonStyle="solid">
      {filtersMarkup}
    </RadioGroup>
  );
}