import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';


class Login extends React.PureComponent {
    state = {
        email: this.props.currentUser.email,
        password: this.props.currentUser.password
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmit = async e => {
        e.preventDefault();
        const payload = {
          email: this.state.email,
          password: this.state.password
        };
        this.props.onLogin(payload, this.clearForm);
    };
    
    clearForm = () => {
        this.email.value = "";
        this.password.value = "";
    };

    render() {

        return (
            <article>
                <Helmet>
                    <title>Login Page</title>
                    <meta name="description" content="A React.js MovieSearch application login" />
                </Helmet>
                <div className="login-page">
                <section className="centered">
                    <h2>Movie Search Login Page</h2>
                </section>
                <section className="centered">
                    <form onSubmit={this.handleFormSubmit}>
                        <h2 style={{ textAlign: "center" }}>Login</h2>
                        <hr />

                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                            maxLength="50"
                            autoFocus
                            style={{ margin: 10 }}
                        />
                        <span style={{ color: "red" }}>*</span>
                        <span style={{ color: "red", marginLeft: 8 }}>
                            {/* {loginErrors.email} */}
                        </span>
                        <br />

                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                            maxLength="50"
                            style={{ margin: 10 }}
                        />
                        <span style={{ color: "red" }}>*</span>
                        <span style={{ color: "red", marginLeft: 8 }}>
                            {/* {loginErrors.password} */}
                        </span>
                        <br />

                        <input
                            type="submit"
                            value="Submit!"
                            style={{ display: "block", margin: "auto" }}
                        />
                    </form>
                </section>
                </div>
            </article>
        )
    }
}

export default Login;

Login.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    currentUser: PropTypes.object,
    onLogin: PropTypes.func
};
  