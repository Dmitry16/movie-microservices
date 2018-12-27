import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectCurrentUser } from './selectors';
import {
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { 
  loginUser,
  registerUser,
  userAuthSuccess,
  userAuthFailure,
  userAuthError,
  userSession
 } from './actions';

import reducer from './reducer';
import saga from './saga';
import Auth from './Auth';

const mapDispatchToProps = (dispatch) => ({

  onLogin: (payload, cb) => {
    console.log('onLogin::', payload);
    dispatch(
      loginUser(payload, () => {
        cb();
        // const { from } = this.props.location.state || {
        //   from: { pathname: "/profile" }
        // };
        // this.props.history.push(from.pathname);
      })
    );
  },
  onRegister: (payload, cb) => {
    console.log('onRegister::', payload);
    dispatch(
      registerUser(payload, () => {
        cb();
        // this.props.history.push("/profile");
      })
    );
  }
});

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(withReducer, withSaga, withConnect)(Auth);
export { mapDispatchToProps };