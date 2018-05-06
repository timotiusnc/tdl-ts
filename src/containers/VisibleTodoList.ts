import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters, TodoAction } from '../actions/actions'
import { TodoList } from '../components/TodoList'
import { ToDo, TodoAppState } from '../states/state'
import { Dispatch } from 'redux';
import { Todo } from '../components/Todo';

interface OwnProps {
  filter?: VisibilityFilters
}

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

function mapStateToProps(state: TodoAppState, ownProps: OwnProps) {
  return {
    // todos: getVisibleTodos(state.todos, ownProps.filter state.visibilityFilter)
    todos: getVisibleTodos(state.todos, ownProps.filter || VisibilityFilters.SHOW_ALL)
  }
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>) {
  return {
    onToDoClick: (id: number) => {
      dispatch(toggleTodo(id))
    }
  }
}

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
