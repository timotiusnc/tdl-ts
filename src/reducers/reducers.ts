import { combineReducers } from 'redux'
import { TodoAction, VisibilityFilters, Types, RedditAction } from '../actions/actions'
import { ToDo, Post, Map } from '../states/state'

// Todo app
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action: TodoAction) {
  switch (action.type) {
    case Types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state: ToDo[] = [], action: TodoAction) {
  switch (action.type) {
    case Types.ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          completed: false
        }
      ]
    case Types.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.index) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

export const todoReducers = combineReducers({
  visibilityFilter,
  todos
})

// Reddit app
function selectedSubreddit(state = 'reactjs', action: RedditAction) {
  switch (action.type) {
    case Types.SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts(
  state: Post = {
    isFetching: false,
    didInvalidate: false,
    lastUpdated: new Date(),
    items: []
  },
  action: RedditAction
) {
  switch (action.type) {
    case Types.INVALIDATE_SUBREDDIT:
      return { ...state, didInvalidate: true }
    case Types.REQUEST_POSTS:
      return { ...state, isFetching: true, didInvalidate: false }
    case Types.RECEIVE_POSTS:
      return { ...state, isFetching: false, didInvalidate: false, items: action.posts, lastUpdated: new Date(action.receivedAt) }
    default:
      return state
  }
}

function postsBySubreddit(state: Map<Post> = {}, action: RedditAction) {
  switch (action.type) {
    case Types.INVALIDATE_SUBREDDIT:
    case Types.RECEIVE_POSTS:
    case Types.REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

export const redditReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})
