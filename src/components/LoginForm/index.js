import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {email: '', password: ''}

  emailField = event => {
    this.setState({email: event.target.value})
  }

  passwordField = event => {
    this.setState({password: event.target.value})
  }

  renderLoginFrom = () => {
    const {email, password} = this.state
    let isFilled
    if (email !== '' && password !== '') {
      isFilled = 'active-continue-button'
    } else {
      isFilled = 'continue-button'
    }

    return (
      <Link to="/login" className="login-link-decoration">
        <div className="login-form-page-container">
          <div className="login-form-container">
            <div className="logo-header-text-container">
              <img
                src="https://res.cloudinary.com/dizehspwf/image/upload/v1667072521/SQ_WH_bg_1_lpqjad.png"
                alt="website-logo"
                className="website-logo"
              />
              <h1 className="logo-description">Forcasting</h1>
              <p className="input-disclaimer">
                Enter your email address and password
              </p>
            </div>
            <form>
              <div className="field-container">
                <input
                  type="text"
                  placeholder="Email"
                  className="field"
                  onChange={this.emailField}
                />
              </div>
              <div className="field-container">
                <input
                  type="password"
                  placeholder="Password"
                  className="field"
                  onChange={this.passwordField}
                />
              </div>
              <div className="checkbox-container">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="remember" className="remember-password">
                  Remember Me
                </label>
              </div>
              <Link to="/">
                <button className={isFilled} type="submit">
                  Continue
                </button>
              </Link>

              <p className="forgot-password">Forgot Password?</p>
              <p className="sign-up-section">
                Do not have an account?{' '}
                <Link to="/create-user">
                  <button type="button" className="sign-up-span">
                    Sign up
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Link>
    )
  }

  render() {
    return <>{this.renderLoginFrom()}</>
  }
}

export default LoginForm
