import ActionTypes from "./constants";
import { ContainerState, ContainerActions } from "./types";

// The initial state of the App
interface Array {
  id: number;
  text: string;
}

// The initial state of the App
export const initialState: {
  value: any;
  selectedRow: number;
  available: Array[];
  selected: Array[];
} = {
  value: "",
  available: [
    { id: 1, text: "text 1" },
    { id: 2, text: "text 2" },
    { id: 3, text: "text 3" },
    { id: 4, text: "text 4" }
  ],
  selected: [
    { id: 5, text: "text 5" },
    { id: 6, text: "text 6" },
    { id: 7, text: "text 7" },
    { id: 8, text: "text 8" }
  ],
  selectedRow: 1
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function homeReducer(
  state: ContainerState = initialState,
  action: ContainerActions
): ContainerState {
  switch (action.type) {
    case ActionTypes.CHANGE_SELECTED:
      const { payload } = action;
      let { selectedRow } = state;
      selectedRow = payload;
      return {
        ...state,
        selectedRow
      };

    case ActionTypes.DELETE_ITEM:
      const { id, selectedRowId } = action.payload;
      let rowId = state.selectedRow;
      let availableArr: any = [...state.available];
      let selectedArr: any = [...state.selected];

      const type = selectedArr.find(sel => sel.id === id);

      availableArr = availableArr.filter(av => av.id !== id);
      selectedArr = selectedArr.filter(av => av.id !== id);
      if (id === selectedRowId) {
        type ? rowId = selectedArr[0]?.id || availableArr[0]?.id || -1 :
          rowId = availableArr[0]?.id || availableArr[0]?.id || -1;

      }


      return {
        ...state,
        selected: [...selectedArr],
        available: [...availableArr],
        selectedRow: rowId
      };

    case ActionTypes.CHANGE_COLUMN:
      const { btn } = action.payload;
      let available: any = [...state.available];
      let selected: any = [...state.selected];
      let row = state.selectedRow;
      if (btn === "addAll") {
        selected = [...available, ...selected];
        available = [];
      } else if (btn === "removeAll") {
        available = [...available, ...selected];
        selected = [];
      } else if (btn === "removeOne") {
        const index = selected.findIndex(s => s.id === row);
        if (index !== -1) {
          available.push(selected[index]);
          row = selected[index].id;
          selected.splice(index, 1);
        }
      } else if (btn === "addOne") {
        const index = available.findIndex(s => s.id === row);
        if (index !== -1) {
          selected.push(available[index]);
          row = available[index].id;
          available.splice(index, 1);
        }
      }

      return {
        ...state,
        selected,
        available,
        selectedRow: row
      };
    default:
      return state;
  }
}

export default homeReducer;
