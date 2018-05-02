import { Action } from 'redux'

// ACTION ENUM TYPES
export const enum Types {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',

  // Async actions
  SELECT_SUBREDDIT = 'SELECT_SUBREDDIT',
  INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT',
  REQUEST_POSTS = 'REQUEST_POSTS',
  RECEIVE_POSTS = 'RECEIVE_POSTS'
}

//VIBILITY CONSTANTS
export const enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'
}

//ACTION CREATORS
export function addTodo(text: string) {
  return { type: Types.ADD_TODO, text }
}

export function toggleTodo(index: number) {
  return { type: Types.TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter: VisibilityFilters) {
  return { type: Types.SET_VISIBILITY_FILTER, filter }
}

export function selectSubreddit(subreddit: string) {
  return {
    type: Types.SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit: string) {
  return {
    type: Types.INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export function requestPosts(subreddit: string) {
  return {
    type: Types.REQUEST_POSTS,
    subreddit
  }
}

// TODO: json: any (http://choly.ca/post/typescript-json/)
export function receivePosts(subreddit: string, json: any) {
  return {
    type: Types.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child: any) => child.data),
    receivedAt: Date.now()
  }
}


//ACTION INTERFACES
export interface TodoAction extends Action<Types> {
  [extraProps: string]: any;
}

// export interface AddTodo extends TodoAction {
//   type: Types.ADD_TODO,
//   text: string
// }

// export interface ToggleTodo extends TodoAction {
//   type: Types.TOGGLE_TODO,
//   index: number
// }

// export interface SetVisibilityFilter extends TodoAction {
//   type: Types.SET_VISIBILITY_FILTER,
//   filter: VisibilityFilters
// }

// export type Actions = AddTodo | ToggleTodo | SetVisibilityFilter;
