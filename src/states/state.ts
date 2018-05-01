import { VisibilityFilters } from "../actions/actions";

export type ToDo = {
  id: number
  text: string
  completed: boolean
}

export interface AppState {
  visibilityFilter: VisibilityFilters
  todos: ToDo[]
}
