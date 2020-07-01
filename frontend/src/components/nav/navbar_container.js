import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar.jsx';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user


  }
};

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});


export default connect(
  mapStateToProps,
  mDTP
)(NavBar);