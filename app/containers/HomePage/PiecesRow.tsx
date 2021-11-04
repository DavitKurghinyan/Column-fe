import React, { FC, useState } from "react";
import * as Styled from "./styles/styled.";
import { changeSelectedRow, deleteItem } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectRows } from "./selectors";

import { flipOutX } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  flipOutX: {
    animation: "x 1s",
    animationName: Radium.keyframes(flipOutX, "flipOutX")
  }
};

interface Object {
  id: number;
  text: string;
}

interface PiecesRowProps {
  data: Object;
}


const stateSelector = createStructuredSelector({
  selectedRow: makeSelectRows()
});

const PiecesRow: FC<PiecesRowProps> = ({ data }) => {
  const [delBtn, setDelBtn] = useState<boolean>(false);
  const [delItem, setDelItem] = useState<boolean>(false);

  const { selectedRow } = useSelector(stateSelector);

  const dispatch = useDispatch();


  const selectRow = (id: number) => dispatch(changeSelectedRow(id));

  const deleteRow = (ev) => {
    ev.stopPropagation()
    setDelItem(true);
    setTimeout(() => {
      dispatch(deleteItem(data.id, selectedRow));
    }, 800);
  };

  return (
    <StyleRoot style={delItem ? styles.flipOutX : null}>
      <Styled.PiecesRow
        color={
          selectedRow === data.id
            ? "rgba(209,209,209,0.3)"
            : "rgba(255,255,255,0)"
        }
        key={data.id}
        onClick={() => selectRow(data.id)}
        onMouseOver={() => setDelBtn(true)}
        onMouseLeave={() => setDelBtn(false)}
      >
        <Styled.PiecesRowText>
          {data.text}
        </Styled.PiecesRowText>
        {delBtn ? (
          <Styled.PiecesRowDel
            onClick={deleteRow}
          >
            x
          </Styled.PiecesRowDel>
        ) : null}
      </Styled.PiecesRow>
    </StyleRoot>

  );
};

export default PiecesRow;
