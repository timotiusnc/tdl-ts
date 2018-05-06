import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { App } from "./App";
import { Store } from "redux";

interface RootProps {
  store: Store<any>
}

export class Root extends React.Component<RootProps> {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Route path="/:filter?" component={App} />
        </Router>
      </Provider >
    )
  }
}
