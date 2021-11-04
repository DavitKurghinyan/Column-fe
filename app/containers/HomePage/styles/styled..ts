import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

export const Pieces = styled.div`
  width: 400px;
`;

export const PiecesHeading = styled.h2`
  background: #d6b1ff;
  color: rgba(0, 0, 0, 0.78);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  border-radius: 2px;
  padding: 10px 15px;
`;
export const PiecesBlock = styled.div`
  border: 1px solid #cfa4ff;
  height: 400px;
  padding: 8px;
  border-radius: 2px;
`;
export const PiecesSearch = styled.input`
  border: 1px solid #cfa4ff;
  padding: 8px;
  border-radius: 2px;
  outline: none;
`;

export const PiecesRow = styled.div`
  margin: 5px 0;
  padding: 8px;
  border-radius: 2px;
  background: ${props => props.color};
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: rgba(209, 209, 209, 0.5);
  }
`;

export const PiecesRowText = styled.div`


`;

export const PiecesRowDel = styled.div`
  margin: 0 10px;

`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px;
  justify-content: center;
`;
export const Button = styled.button`
  margin: 10px;
  border: 0;
  background: ${props => (props.disabled ? "rgba(124,124,124,0.3)" : "rgba(208,208,208,0.6)")};
  padding: 10px;
  border-radius: 10px;
  min-width: 185px;
  color: ${props => (props.disabled ? "rgba(124,124,124,0.7)" : "#0000000")};
  font-size: 20px;
  transition: 0.4s;
  cursor: ${props => (props.disabled ? "disabled" : "pointer")};

  &:hover {
    opacity: 0.8;
  }
`;
