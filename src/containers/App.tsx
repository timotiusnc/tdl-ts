import * as React from 'react'
import { Footer } from '../components/Footer'
import { AddTodo } from './AddTodo'
import { VisibleTodoList } from '../containers/VisibleTodoList'

export class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}
