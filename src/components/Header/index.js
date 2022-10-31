import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'
import {AiOutlinePoweroff} from 'react-icons/ai'
import {BiChevronDown} from 'react-icons/bi'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  onHamburgerMenu = () => {
    const {hideOrShowSideBar} = this.props
    hideOrShowSideBar()
  }

  render() {
    return (
      <div className="header-container">
        <HiOutlineMenuAlt2
          className="hamburger-menu"
          onClick={this.onHamburgerMenu}
        />
        <div className="city-container">
          <GoLocation className="header-icon" />
          <p className="city-name">Vijayawada</p>
          <BiChevronDown className="header-icon" />
          <Link to="/login">
            <AiOutlinePoweroff className="logout-icon" />
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
