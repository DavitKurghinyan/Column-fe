/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectHome = (state: ApplicationRootState) => state.home || initialState;

const makeSelectValue = () =>
  createSelector(selectHome, substate => substate.value);

const makeSelectAvailable = () =>
  createSelector(selectHome, substate => substate.available);

const makeSelectSelected = () =>
  createSelector(selectHome, substate => substate.selected);

const makeSelectRows = () =>
  createSelector(selectHome, substate => substate.selectedRow);

export {
  selectHome,
  makeSelectValue,
  makeSelectAvailable,
  makeSelectSelected,
  makeSelectRows,
};
