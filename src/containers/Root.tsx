import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { App } from "./App";
import { Store } from "redux";

interface RootProps {
  store: Store<any>
}

export class Root extends React.Component<RootProps> {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <Route path="/:filter?" component={App} />
        </BrowserRouter>
      </Provider >
    )
  }
}
