import * as React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { todoReducers, redditReducer } from './reducers/reducers'
import { App } from './containers/App'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters, selectSubreddit, fetchPosts } from './actions/actions';
import { Root } from "./containers/Root";

// Todo
// const store = createStore(todoReducers)
// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

// store.dispatch(addTodo('Satu'))
// store.dispatch(addTodo('Dia'))
// store.dispatch(addTodo('Tiga'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// unsubscribe()

// Reddit
// const store = createStore(
//   redditReducer,
//   applyMiddleware(
//     thunkMiddleware // lets us dispatch() functions
//   )
// )

// const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(selectSubreddit('reactjs'))
// store.dispatch(fetchPosts('reactjs'))

// Todo with router
const store = createStore(todoReducers, applyMiddleware(thunkMiddleware))
const unsubscribe = store.subscribe(() => console.log(store.getState()))

render(
  <Root store={store} />,
  document.getElementById('root')
)
