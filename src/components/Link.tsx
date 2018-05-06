import * as React from 'react'
import { VisibilityFilters } from '../actions/actions'

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
