// import { createStore } from 'redux'
// import todoApp from './reducers/reducers'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions/actions';

// const store = createStore(todoApp)

import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/reducers'
import { App } from './containers/App'

const store = createStore(todoApp)
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addTodo('Satu'))
// store.dispatch(addTodo('Dia'))
// store.dispatch(addTodo('Tiga'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// unsubscribe()
