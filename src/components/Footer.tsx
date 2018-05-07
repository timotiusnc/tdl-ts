import * as React from 'react'
import { FilterLink } from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/actions'
import { Location } from 'history'

interface FooterProps {
  location?: Location
}

export class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLink filter={VisibilityFilters.SHOW_ALL} location={this.props.location}>
          All
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} location={this.props.location}>
          Active
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} location={this.props.location}>
          Completed
        </FilterLink>
      </p>
    )
  }
}
