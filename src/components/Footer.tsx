import * as React from 'react'
// import { FilterLink } from '../containers/FilterLink'
import { FilterLinkRouter } from '../containers/FilterLinkRouter'
import { VisibilityFilters } from '../actions/actions'

export class Footer extends React.Component<{}> {
  render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLinkRouter filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterLinkRouter>
        {', '}
        <FilterLinkRouter filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterLinkRouter>
        {', '}
        <FilterLinkRouter filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLinkRouter>
      </p>
    )
  }
}
