import { combineReducers } from 'redux'
import { TodoAction, VisibilityFilters, Types } from '../actions/actions'
import { ToDo } from '../states/state'

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
          // const a = { ...todo, completed: !todo.completed }
          // console.log(a)
          // return a
          return { ...todo, completed: !todo.completed }
          // return Object.assign({}, todo, { completed: !todo.completed })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp
