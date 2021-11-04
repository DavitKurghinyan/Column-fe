import React, { FC } from 'react';
import * as Styled from './styles/styled.';

import _ from 'lodash';
import PiecesRow from "./PiecesRow";

const key = 'home';

interface Array {
  id: number;
  text: string;
}

interface PiecesBlockProps {
  heading: string;
  data: Array[];
}

const PiecesBlock: FC<PiecesBlockProps> = ({ heading, data }) => {

  return (
    <Styled.Pieces>
      <Styled.PiecesHeading>{heading} Pieces</Styled.PiecesHeading>
      <Styled.PiecesBlock>
        {_.map(data, col => (
         <PiecesRow
         key={col.id}
         data={col}
         />
        ))}
      </Styled.PiecesBlock>
    </Styled.Pieces>
  );
};
export default PiecesBlock;
