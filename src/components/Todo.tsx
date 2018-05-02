import * as React from 'react'

interface TodoProps {
  onClick: () => void
  completed: boolean
  text: string
}

export class Todo extends React.Component<TodoProps> {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{ textDecoration: (this.props.completed ? 'line-through' : 'none') }}
      >
        {this.props.text}
      </li>
    )
  }
}
