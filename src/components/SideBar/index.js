import {Component} from 'react'
import {MdDashboard} from 'react-icons/md'
import {BsFileEarmarkSpreadsheet} from 'react-icons/bs'
import './index.css'

class SideBar extends Component {
  state = {
    bgToDashBoardBtn: true,
    bgToForeCastButton: false,
  }

  addBgToForeCastBtn = () => {
    const {changeToForeCastHomePage} = this.props
    this.setState({
      bgToDashBoardBtn: false,
      bgToForeCastButton: true,
    })
    changeToForeCastHomePage()
  }

  addBgToDashBoardBtn = () => {
    const {changeToForeCastHomePage} = this.props
    this.setState({
      bgToForeCastButton: false,
      bgToDashBoardBtn: true,
    })
    changeToForeCastHomePage()
  }

  renderSideMenu = () => {
    const {bgToForeCastButton, bgToDashBoardBtn} = this.state
    const selectedButtonDashBoard = bgToDashBoardBtn
      ? 'active-button'
      : 'menu-button'

    const selectedButtonForeCast = bgToForeCastButton
      ? 'active-button'
      : 'menu-button'

    return (
      <div className="home-page-side-bar">
        <div>
          <div className="logo-container">
            <img
              src="https://res.cloudinary.com/dizehspwf/image/upload/v1667072521/SQ_WH_bg_1_lpqjad.png"
              alt="website logo"
              className="logo"
            />
            <h1 className="logo-des">Forcasting</h1>
          </div>
          <div className="sidebar-menu-container">
            <button type="button" className="menu-button">
              Main
            </button>
            <button
              type="button"
              className={selectedButtonDashBoard}
              onClick={this.addBgToDashBoardBtn}
            >
              <MdDashboard className="menu-icon" />
              <p className="menu-name">Dashboard</p>
            </button>
            <button
              type="button"
              className={selectedButtonForeCast}
              onClick={this.addBgToForeCastBtn}
            >
              <BsFileEarmarkSpreadsheet className="menu-icon" />
              <p className="menu-name">Forecast Report</p>
            </button>
          </div>
        </div>
        <div className="bottom-sec-container">
          <img
            src="https://res.cloudinary.com/dizehspwf/image/upload/v1667082377/Silver_1_jqmos3.png"
            alt="upgrade"
            className="upgrade-img"
          />
          <button type="button" className="upgrade-button">
            Upgrade to Pro
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {showSideBar} = this.props
    return <>{showSideBar ? this.renderSideMenu() : null}</>
  }
}

export default SideBar
