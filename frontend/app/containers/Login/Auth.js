import React, { PureComponent, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import './style.scss';

class Auth extends PureComponent {

    componentDidMount() {
        // this.props.history && this.props.history.push("/login")
    }

    handleClick = () => {

    }

    render() {

        const { component: Component } = this.props;

        console.log('Auth props::', this.props)

        return (
            <Fragment>
                <Route render={ () => {
                    if (!this.props.loggedIn) {
                        return <Login {...this.props} />

                    } else if (this.props.location.pathname !== "/home") {
                        return <Redirect to={{ pathname: "/home" }}/>
                    }
                    return null;
                }} />

                <Route exact path="/home" component={Component} />

            </Fragment>
        )
    }
}
    // <button onClick={this.handleClick}>register</button>

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