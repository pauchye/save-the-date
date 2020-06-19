import React from 'react';
import { withRouter } from 'react-router-dom';
import './login.scss'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/dash");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(
      {
        email: "user@user.com",
        password: "password",
      },
      () => this.props.login(Object.assign({}, this.state))
    );
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="" onSubmit={this.handleSubmit}>
          <img className="phone" src={require(`./phone2.png`)}></img>
          <div className="login-form">
            <input
              className="login-email"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              className="login-password"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input className="login-btn" type="submit" value="LOG IN" />
            {this.renderErrors()}
          </div>

          <div>
            <button className='login-demo-button' onClick={this.handleClick}>
              Demo Login
            </button>
          </div>

          <br />
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);