import { connect } from 'react-redux';
import Dash from './dash';
// import { fetchDinings } from '../../actions/dining_actions'
import { fetchEvents } from '../../actions/event_actions'
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        // dinings: Object.values(state.dinings),
        events: Object.values(state.events)
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        // fetchDinings: () => dispatch(fetchDinings()),
        fetchEvents: () => dispatch(fetchEvents()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Dash);
