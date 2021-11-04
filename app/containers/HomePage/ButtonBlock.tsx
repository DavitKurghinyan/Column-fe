import React, { FC } from 'react';

import Button from './Button';
import * as Styled from './styles/styled.';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAvailable, makeSelectSelected } from './selectors';

import _ from 'lodash';

const stateSelector = createStructuredSelector({
  available: makeSelectAvailable(),
  selected: makeSelectSelected(),
});

const ButtonBlock: FC = () => {
  const { selected, available } = useSelector(stateSelector);

  const availableArr = _.isEmpty(available);
  const selectedArr = _.isEmpty(selected);

  return (
    <Styled.Buttons>
      <Button disable={availableArr} text={'Add >'} addOne="addOne" />
      <Button disable={availableArr} text={'Add all >>'} addAll="addAll" />
      <Button disable={selectedArr} text={'< Remove'} removeOne="removeOne" />
      <Button
        disable={selectedArr}
        text={'<< Remove all'}
        removeAll="removeAll"
      />
    </Styled.Buttons>
  );
};

export default ButtonBlock;
