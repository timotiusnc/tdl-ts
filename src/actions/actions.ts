import { Action } from 'redux'

/*
* action types
*/
export const enum Types {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}

/*
* other constants
*/
export const enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'
}

export interface TodoAction extends Action<Types> {
  [extraProps: string]: any;
}

export interface AddTodo extends TodoAction {
  type: Types.ADD_TODO,
  text: string
}

export interface ToggleTodo extends TodoAction {
  type: Types.TOGGLE_TODO,
  index: number
}

export interface SetVisibilityFilter extends TodoAction {
  type: Types.SET_VISIBILITY_FILTER,
  filter: VisibilityFilters
}

// export type Actions = AddTodo | ToggleTodo | SetVisibilityFilter;

/*
* action creators
*/
export function addTodo(text: string): AddTodo {
  return { type: Types.ADD_TODO, text }
}

export function toggleTodo(index: number): ToggleTodo {
  return { type: Types.TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter: VisibilityFilters): SetVisibilityFilter {
  return { type: Types.SET_VISIBILITY_FILTER, filter }
}
