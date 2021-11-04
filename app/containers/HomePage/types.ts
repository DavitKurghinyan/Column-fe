import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */

interface Array {
  id: number;
  text: string;
}

interface HomeState {
  value: any;
  selected: Array[];
  available: Array[];
  selectedRow: number;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = HomeState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions, Array };
