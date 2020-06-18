import { connect } from 'react-redux';
import Dash from './dash';
// import { fetchDinings } from '../../actions/dining_actions'
import { fetchEvents } from '../../actions/event_actions'
import { openModal } from '../../actions/modal_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        // dinings: Object.values(state.dinings),
        currentUser: state.session.user,
        events: Object.values(state.events)
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger
    // const userId = state.session.user.id;
    return {
      // fetchDinings: () => dispatch(fetchDinings()),
      fetchEvents: () => dispatch(fetchEvents()),
      fetchUsers: () => dispatch(fetchUsers()),
      fetchUser: (userId) => dispatch(fetchUser(userId)),

      openModal: (modal) => dispatch(openModal(modal)),
    };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Dash);
