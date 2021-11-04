import React, { FC } from 'react';

import * as Styled from './styles/styled.';
import { useDispatch } from 'react-redux';
import { changeColumn } from './actions';

interface ButtonProps {
  disable: boolean;
  text: string;
  addAll?: string;
  removeAll?: string;
  addOne?: string;
  removeOne?: string;
}

const Button: FC<ButtonProps> = ({
  disable,
  text,
  removeAll,
  addAll,
  addOne,
  removeOne,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const btn = removeAll || addAll || addOne || removeOne;
    if (!disable) {
      dispatch(changeColumn(btn));
    }
  };
  return (
    <Styled.Button onClick={handleClick} disabled={disable}>
      {text}
    </Styled.Button>
  );
};
export default Button;
