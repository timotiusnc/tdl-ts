import * as React from 'react'
import { VisibilityFilters } from '../actions/actions'
import { RouteComponentProps } from 'react-router-dom'

interface LinkProps {
  active: boolean
  onClick: () => void
}

export class Link extends React.Component<LinkProps> {
  render() {
    if (this.props.active) {
      return (<span>{this.props.children}</span>)
    }

    return (
      <a
        href=""
        onClick={e => {
          e.preventDefault()
          this.props.onClick()
        }}
      >
        {this.props.children}
      </a>
    )
  }
}

import { NavLink } from 'react-router-dom'

interface LinkRouterProps {
  filter: VisibilityFilters
  active: boolean
}

export class LinkRouter extends React.Component<LinkRouterProps> {
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
