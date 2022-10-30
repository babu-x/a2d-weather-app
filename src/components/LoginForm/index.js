import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  renderLoginFrom = () => (
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
              <input type="text" placeholder="Email" className="field" />
            </div>
            <div className="field-container">
              <input type="password" placeholder="Password" className="field" />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" className="checkbox" />
              <label htmlFor="remember" className="remember-password">
                Remember Me
              </label>
            </div>
            <button className="continue-button" type="submit">
              Continue
            </button>
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

  render() {
    return <>{this.renderLoginFrom()}</>
  }
}

export default LoginForm
