import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { VisibilityFilters } from '../actions/actions';

interface FilterLinkRouterProps {
  filter: VisibilityFilters
}

export class FilterLinkRouter extends React.Component<FilterLinkRouterProps> {
  render() {
    return (
      <NavLink
        exact
        to={this.props.filter === VisibilityFilters.SHOW_ALL ? '/' : `/${this.props.filter}`}
        activeStyle={{
          textDecoration: 'none',
          color: 'red'
        }}
      >
        {this.props.children}
      </NavLink>
    )
  }
}
