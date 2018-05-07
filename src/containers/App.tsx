import * as React from 'react'
import { Footer } from '../components/Footer'
import { AddTodo } from './AddTodo'
import { VisibleTodoList } from '../containers/VisibleTodoList'
import { match, Route } from 'react-router-dom'
import { History, Location } from 'history'
import { VisibilityFilters } from '../actions/actions';
import RaisedButton from 'material-ui/RaisedButton'
import { MuiThemeProvider } from 'material-ui/styles';

interface AppProps {
  match: match<any>
  location: Location
  history: History
}

export class App extends React.Component<AppProps> {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AddTodo />
          {/* <VisibleTodoList filter={this.props.match.params.filter || VisibilityFilters.SHOW_ALL} /> */}
          <VisibleTodoList filter={this.props.match.params.filter || VisibilityFilters.SHOW_ALL} location={this.props.location} history={this.props.history} />
          <Route component={Footer} />
          <RaisedButton>Submit</RaisedButton>
        </div>
      </MuiThemeProvider>
    )
  }
}
