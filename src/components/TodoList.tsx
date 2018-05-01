import * as React from 'react'
import { Todo } from './Todo'
import { ToDo } from '../states/state'

interface TodoListProps {
  todos: ToDo[]
  onToDoClick: (id: number) => void
}

export class TodoList extends React.Component<TodoListProps> {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => (
            <Todo key={todo.id} {...todo} onClick={() => this.props.onToDoClick(todo.id)} />
          ))
        }
      </ul>
    )
  }
}
