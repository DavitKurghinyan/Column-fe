/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

enum ActionTypes {
  CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME',
  CHANGE_COUNT = 'boilerplate/Home/CHANGE_COUNT',
  CHANGE_SELECTED = 'boilerplate/Home/CHANGE_SELECTED',
  DELETE_ITEM = 'boilerplate/Home/DELETE_ITEM',
  CHANGE_COLUMN = 'boilerplate/Home/CHANGE_COLUMN',
}

export default ActionTypes;
