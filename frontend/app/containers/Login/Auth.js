import React, { PureComponent, Fragment } from "react";
import Login from './Login';
import Register from './Register';

class Auth extends PureComponent {

    state = {
        register: false
    }

    handleClick() {
        this.setState({register: true});
    }

    render() {

        return (
            <Fragment>
                {!this.state.register && <Login {...this.props}/> }
                <button onClick={this.handleClick.bind(this)}>register</button>
                {this.state.register && <Register {...this.props}/> }
            </Fragment>
        );
    }
}

export default Auth;

Auth.propTypes = {
    // loading: PropTypes.bool,
    // error: PropTypes.oneOfType([
    //   PropTypes.object,
    //   PropTypes.bool,
    // ]),
    // currentUser: PropTypes.object,
    // onSubmitForm: PropTypes.func
};