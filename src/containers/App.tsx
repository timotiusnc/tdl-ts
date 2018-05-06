import * as React from 'react'
import { Footer } from '../components/Footer'
import { AddTodo } from './AddTodo'
import { VisibleTodoList } from '../containers/VisibleTodoList'
import { match } from 'react-router-dom'
import { VisibilityFilters } from '../actions/actions';

interface AppProps {
  match: match<any>
}

export class App extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList filter={this.props.match.params.filter || VisibilityFilters.SHOW_ALL} />
        <Footer />
      </div>
    )
  }
}
