import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';


class Login extends React.PureComponent {
    // handleInputChange() {

    // }
    // handleSubmit(e) {
    //     e.preventDefault();
    //     console.log('this.props.currentUser::', this.props.currentUser);
    //     this.props.onSubmitForm(this.props.currentUser);
    // }
    handleFormSubmit = async e => {
        e.preventDefault();
        const payload = {
          email: this.email.value,
          password: this.password.value
        };
        this.props.onLogin(payload, this.clearForm);
      };
    
      clearForm = () => {
        this.email.value = "";
        this.password.value = "";
      };

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
                    <form onSubmit={this.handleFormSubmit}>
                        <h2 style={{ textAlign: "center" }}>Login</h2>
                        <hr />

                        <label>Email Address</label>
                        <input
                            type="email"
                            ref={node => {
                            this.email = node;
                            }}
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
                            ref={node => {
                            this.password = node;
                            }}
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
  
{/* <form onSubmit={this.handleSubmit.bind(this)}>
<label htmlFor="loginForm">
Type in a user name to login with:
    <br />
    <input className = "form-input"
        id="userName"
        type="email"
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
</form> */}