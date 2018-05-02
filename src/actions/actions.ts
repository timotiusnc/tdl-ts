import { Action, Dispatch } from 'redux'

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
    // posts: json.data.children.map((child: any) => child.data),
    posts: json.values,
    receivedAt: Date.now()
  }
}

export function fetchPosts(subreddit: string) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch: Dispatch<RedditAction>) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPosts(subreddit))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    return fetch('https://sheets.googleapis.com/v4/spreadsheets/1hh58_NZVwsK5xgrVq1oqM0pml0hhwm-vNkvU6RcvexE/values/sheet1!A2:A?key=AIzaSyDUoSTVE22eQHkEJaEzxLuWmB-6j6NQSns')
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(subreddit, json))
      )
  }
}


// ACTION INTERFACES TODO
export interface TodoAction extends Action {
  [extraProps: string]: any;
}

// ACTION INTERFACES REDDIT
export interface RedditAction extends Action {
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
