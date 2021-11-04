import { action } from 'typesafe-actions';
// import { } from './types';

import ActionTypes from './constants';

export const changeUsername = (name: string) =>
  action(ActionTypes.CHANGE_USERNAME, name);

export const changeFieldCount = (value: any) =>
  action(ActionTypes.CHANGE_COUNT, value);

export const changeSelectedRow = (id: number) =>
  action(ActionTypes.CHANGE_SELECTED, id);

export const deleteItem = (id: number, selectedRowId: number) =>
  action(ActionTypes.DELETE_ITEM, { id, selectedRowId });

export const changeColumn = (btn) =>
  action(ActionTypes.CHANGE_COLUMN, { btn });
