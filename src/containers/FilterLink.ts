import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilters } from '../actions/actions'
import { Link } from '../components/Link'
import { AppState } from '../states/state'
import { Dispatch } from 'redux';

interface OwnProps {
  filter?: VisibilityFilters
}

function mapStateToProps(state: AppState, ownProps: OwnProps) {
  return { active: ownProps.filter === state.visibilityFilter }
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps) {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter ? ownProps.filter : VisibilityFilters.SHOW_ALL))
    }
  }
}

//Link props has to have the type: mapStateToProps & mapDispatchToProps & ownProps
//therefore we add optional on OwnProps.filter
export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
