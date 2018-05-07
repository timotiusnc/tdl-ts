import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilters, TodoAction } from '../actions/actions'
import { Link, LinkRouter } from '../components/Link'
import { TodoAppState } from '../states/state'
import { Dispatch } from 'redux'
import { withRouter } from 'react-router-dom'
import { Location } from 'history';

interface OwnProps {
  filter?: VisibilityFilters
  location?: Location
}

function mapStateToProps(state: TodoAppState, ownProps: OwnProps) {
  return { active: ownProps.filter === state.visibilityFilter }
}

//Link props has to have the type: mapStateToProps & mapDispatchToProps & ownProps
//therefore we add optional on OwnProps.filter
// export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
export const FilterLink = connect(mapStateToProps)(LinkRouter)
