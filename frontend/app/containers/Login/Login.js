import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class Login extends React.PureComponent {
    render() {
        return <div>olala!!!</div>
    }
}

export default Login;

Login.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    users: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.bool,
    ]),
    onSubmitForm: PropTypes.func,
    currentMovieTitle: PropTypes.string,
    onChangeMovieTitle: PropTypes.func,
};