import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup.scss'



class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/dash'); 
    }
    console.log(this.state);
    this.setState({errors: nextProps.errors});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }



  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
      {this.renderErrors()}
          <img className="phone" src={require(`./phone1.png`)} alt=""></img>
          <div className="signup-form">
            <br/>
              <input className="email" type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="enter your email"
              />
            <br/>
              <input className="username" type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="enter your username"
              />
            <br/>
              <input className="password" type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="enter your password"
              />
            <br/>
              <input className="password2" type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="confirm your password"
              />
            <br/>
            <input className="join" type="submit" value="JOIN" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
