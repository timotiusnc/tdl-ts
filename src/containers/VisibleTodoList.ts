import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../actions/actions'
import { TodoList } from '../components/TodoList'
import { ToDo, TodoAppState } from '../states/state'
import { Dispatch } from 'redux';
import { Todo } from '../components/Todo';

function getVisibleTodos(todos: ToDo[], filter: VisibilityFilters) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

function mapStateToProps(state: TodoAppState) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onToDoClick: (id: number) => {
      dispatch(toggleTodo(id))
    }
  }
}

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
