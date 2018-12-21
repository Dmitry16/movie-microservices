import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';


class Login extends React.PureComponent {
    handleInputChange() {

    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('this.props.currentUser::', this.props.currentUser);
        this.props.onSubmitForm(this.props.currentUser);
    }
    render() {

        const { currentUser: { name, surname }} = this.props;

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
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label htmlFor="loginForm">
                        Type in a user name to login with:
                            <br />
                            <input className = "form-input"
                                id="userName"
                                type="text"
                                placeholder="name"
                                value={name}
                                onChange={this.handleInputChange}
                            /><br />
                            <input className = "form-input"
                                id="userSurname"
                                type="text"
                                placeholder="surname"
                                value={surname}
                                onChange={this.handleInputChange}
                            /><br />
                            <input type="submit" value="Submit" />
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
<<<<<<< HEAD
    users: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.bool,
    ]),
    onSubmitForm: PropTypes.func,
    currentMovieTitle: PropTypes.string,
    onChangeMovieTitle: PropTypes.func,
};
=======
    currentUser: PropTypes.object,
    onSubmitForm: PropTypes.func
};
  
>>>>>>> new
