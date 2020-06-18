import { connect } from 'react-redux';
import Calender from './calender';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';
import { updateUser } from "../../actions/user_actions";


const mapStateToProps = (state) => {
  // const userId = state.session.user.id

  // debugger;
    return {
      currentUser: state.session.user,
    };
    
};


const mapDispatchToProps = dispatch => {
  // debugger;
    return {
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      updateUser: (user) => dispatch(updateUser(user)),
      openModal: (modal) => dispatch(openModal(modal)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calender);