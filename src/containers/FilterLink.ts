import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilters, TodoAction } from '../actions/actions'
import { Link } from '../components/Link'
import { TodoAppState } from '../states/state'
import { Dispatch } from 'redux';

interface OwnProps {
  filter?: VisibilityFilters
}

function mapStateToProps(state: TodoAppState, ownProps: OwnProps) {
  return { active: ownProps.filter === state.visibilityFilter }
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>, ownProps: OwnProps) {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter ? ownProps.filter : VisibilityFilters.SHOW_ALL))
    }
  }
}

//Link props has to have the type: mapStateToProps & mapDispatchToProps & ownProps
//therefore we add optional on OwnProps.filter
// export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
