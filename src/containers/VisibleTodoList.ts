import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters, TodoAction, onToDoClick } from '../actions/actions'
import { TodoList } from '../components/TodoList'
import { ToDo, TodoAppState } from '../states/state'
import { Dispatch } from 'redux';
import { Todo } from '../components/Todo';
import { History, Location } from 'history';

interface OwnProps {
  filter?: VisibilityFilters
  location?: Location
  history?: History
}

function getVisibleTodos(todos: ToDo[], filter: VisibilityFilters) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      console.log('show-all', todos)
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

function mapStateToProps(state: TodoAppState, ownProps: OwnProps) {
  console.log('location', ownProps.location)
  console.log('history', ownProps.history)
  console.log('state', state)
  return {
    // todos: getVisibleTodos(state.todos, ownProps.filter state.visibilityFilter)
    todos: getVisibleTodos(state.todos, ownProps.filter || VisibilityFilters.SHOW_ALL)
  }
}

// function onToDoClick(id: number) {
//   return toggleTodo(id)
// }

// function mapDispatchToProps(dispatch: Dispatch<TodoAction>) {
//   return {
//     onToDoClick: (id: number) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

// export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export const VisibleTodoList = connect(mapStateToProps, { onToDoClick })(TodoList)
