import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';


class Login extends React.PureComponent {
    handleInputChange() {

    }
    render() {

        console.log('Login this.props::', this.props);

        const { currentUser: { name, surname } } = this.props;

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
                    <form onSubmit={this.props.onSubmitForm}>
                        <label htmlFor="loginForm">
                        Type in a user name to login with:
                            <br />
                            <input className = "form-input"
                                id="userName"
                                type="text"
                                placeholder="name"
                                value={name}
                                onChange={this.handleInputChange}
                            />
                            <br />
                            <input className = "form-input"
                                id="userSurname"
                                type="text"
                                placeholder="surname"
                                value={surname}
                                onChange={this.handleInputChange}
                            />
                        </label>
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
    onSubmitForm: PropTypes.func
  };
  