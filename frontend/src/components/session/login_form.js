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

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/dash");
    }
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

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
        email: "001@001.com",
        password: "123456",
      },
      () => this.props.login(Object.assign({}, this.state))
    );
  }

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
          <div>
            <button className='login-demo-button' onClick={this.handleClick}>
              Demo Login
            </button>
          </div>
            {this.renderErrors()}
          <img className="phone" src={require(`./phone2.png`)} alt="" ></img>
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
          </div>


          <br />
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);