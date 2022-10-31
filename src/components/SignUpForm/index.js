import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class SignUpForm extends Component {
  state = {email: '', password: '', createUser: false}

  onChangeEmailFiled = event => {
    this.setState({email: event.target.value})
  }

  onChangePasswordFiled = event => {
    this.setState({password: event.target.value})
  }

  postData = async event => {
    this.setState({createUser: true})
    event.preventDefault()
    const {email, password} = this.state
    const url = '/create-user'
    const options = {
      method: 'POST',
      'Content Type': 'application/json',
      body: JSON.stringify({
        email,
        password,
      }),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      console.log('registration success')
    } else {
      console.log('login failed')
    }
  }

  renderSignUpFrom = () => {
    const {email, password} = this.state
    let isFilled
    if (email !== '' && password !== '') {
      isFilled = 'active-continue-button'
    } else {
      isFilled = 'continue-button'
    }
    return (
      <>
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
                  <input
                    type="text"
                    placeholder="Email"
                    className="field"
                    onChange={this.onChangeEmailFiled}
                    value={email}
                  />
                </div>
                <div className="field-container">
                  <input
                    type="password"
                    placeholder="Password"
                    className="field"
                    onChange={this.onChangePasswordFiled}
                    value={password}
                  />
                </div>
                <button
                  className={isFilled}
                  type="submit"
                  onClick={this.postData}
                >
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
      </>
    )
  }

  renderCreatedUser = () => (
    <div className="sign-up-form-page-container">
      <div className="sign-up-form-container">
        <div className="sign-up-header-text-container">
          <img
            src="https://res.cloudinary.com/dizehspwf/image/upload/v1667072521/SQ_WH_bg_1_lpqjad.png"
            alt="website-logo"
            className="website-logo"
          />
          <h1 className="logo-description">Forcasting</h1>
        </div>
        <div className="created-user-container">
          <img
            src="https://res.cloudinary.com/dizehspwf/image/upload/v1667208695/Vector_xtid5n.png"
            alt="created-user"
            className="created-user"
          />
          <h1 className="created-user-title">Congratulations</h1>
          <p className="created-user-des">Your Account Created Successfully</p>
        </div>
        <Link to="/login">
          <button className="back-to-login" type="button">
            Back to Login
          </button>
        </Link>
      </div>
    </div>
  )

  render() {
    const {createUser} = this.state
    return (
      <>{createUser ? this.renderCreatedUser() : this.renderSignUpFrom()}</>
    )
  }
}

export default SignUpForm
