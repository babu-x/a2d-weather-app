import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class SignUpForm extends Component {
  renderLoginFrom = () => (
    <Link to="/create-user" className="sign-up-link-decoration">
      <div className="sign-up-form-page-container">
        <div className="sign-up-form-container">
          <div className="sign-up-header-text-container">
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
            <button className="continue-button" type="submit">
              Continue
            </button>
            <p className="privacy-policy">
              By registering you agree to the Forcasting.{' '}
              <span className="span-privacy-policy"> Terms of Use</span> and
              <span className="span-privacy-policy"> Privacy Policy</span>.
            </p>
            <p className="login-section">
              Already have an account?{' '}
              <Link to="/login">
                <button type="button" className="login-span">
                  Login
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

export default SignUpForm
