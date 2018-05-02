import { VisibilityFilters } from "../actions/actions";

// Todo
export type ToDo = {
  id: number
  text: string
  completed: boolean
}

export interface TodoAppState {
  visibilityFilter: VisibilityFilters
  todos: ToDo[]
}

// Reddit
export interface Item {
  id: number
  title: string
}

export interface Post {
  isFetching: boolean
  didInvalidate: boolean
  lastUpdated: Date
  items: Item[]
}

export interface Map<T> {
  [key: string]: T
}

export interface RedditAppState {
  selectedSubreddit: string
  postBySubreddit: Map<Post>
}

// JSON example
// {
//   selectedSubreddit: 'frontend',
//   postsBySubreddit: {
//     frontend: {
//       isFetching: true,
//       didInvalidate: false,
//       items: []
//     },
//     reactjs: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,
//       items: [
//         {
//           id: 42,
//           title: 'Confusion about Flux and Relay'
//         },
//         {
//           id: 500,
//           title: 'Creating a Simple Application Using React JS and Flux Architecture'
//         }
//       ]
//     }
//   }
// }
