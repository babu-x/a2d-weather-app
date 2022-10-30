import {WiHumidity} from 'react-icons/wi'
import {BiWind} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {showSideBar: true}

  hideOrShowSideBar = () => {
    this.setState(prevState => ({showSideBar: !prevState.showSideBar}))
  }

  render() {
    const {showSideBar} = this.state
    return (
      <Link to="/" className="link-item">
        <div className="home-page-container">
          <SideBar showSideBar={showSideBar} />
          <div className="home-page-weather-side-bar">
            <Header hideOrShowSideBar={this.hideOrShowSideBar} />
            <div className="weather-container">
              <img
                src="https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png"
                alt="cloud"
                className="cloud-img"
              />
              <div className="weather-card">
                <p className="date">Today, 12 September</p>
                <div className="degrees-container">
                  <h1 className="degrees">29</h1>
                </div>
                <p className="weather-type">Cloudy</p>
                <p className="wind">
                  <BiWind className="wind-icon" /> Wind &nbsp; | &nbsp; 10km/h
                </p>
                <p className="wind">
                  <WiHumidity className="wind-icon" /> Hum &nbsp; | &nbsp; 54%
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
export default Home
