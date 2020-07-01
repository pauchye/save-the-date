import { connect } from 'react-redux';
import Dash from './dash';
import { fetchEvents } from '../../actions/event_actions'
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        events: Object.values(state.events)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchEvents: () => dispatch(fetchEvents()),
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      openModal: (modal) => dispatch(openModal(modal)),
    };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Dash);
