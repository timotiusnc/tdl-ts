import * as React from 'react'
import { connect } from 'react-redux'
import { addTodo, TodoAction } from '../actions/actions'
import { Dispatch } from 'redux';
import { promisify } from 'util';

interface AddTodoProps {
  dispatch: Dispatch<TodoAction>
}

interface AddTodoState {
  newTodo: string
}

class AddTodoComponent extends React.Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps) {
    super(props)
    this.state = { newTodo: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  private handleChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      newTodo: e.currentTarget.value
    })

    // let a: Promise<Response> = fetch('http://www.google.com')
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!this.state.newTodo.trim()) return

    this.props.dispatch(addTodo(this.state.newTodo))
    this.setState({
      newTodo: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.newTodo} onChange={this.handleChange} />
          <button type="submit">
            Add Todo
        </button>
        </form>
      </div >
    )
  }
}

export const AddTodo = connect()(AddTodoComponent)
