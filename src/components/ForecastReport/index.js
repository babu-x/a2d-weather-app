import {FaRegCalendarAlt} from 'react-icons/fa'
import './index.css'

const todayForeCast = [
  {
    degree: '29°C',
    time: '13:00',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '26°C',
    time: '14:00',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    time: '13:00',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    time: '13:00',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    time: '13:00',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    time: '13:00',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    time: '13:00',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    time: '13:00',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
]

const nextForecast = [
  {
    degree: '29°C',
    date: 'sep. 20',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    date: 'sep, 20',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    date: 'sep, 20',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    date: 'sep, 20',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    date: 'sep, 20',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    date: 'sep. 20',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    date: 'sep, 20',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    date: 'sep, 20',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    date: 'sep, 20',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
  {
    degree: '29°C',
    date: 'sep, 20',
    cloudImage:
      'https://res.cloudinary.com/dizehspwf/image/upload/v1667101833/Group_650_oaz955.png',
  },
]

const ForecastingReport = () => (
  <>
    <h1 className="title">
      Today, <span>sep 12</span>
    </h1>
    <ul className="top-ul">
      {todayForeCast.map(eachReport => (
        <li className="top-li">
          <p className="degree">{eachReport.degree}</p>
          <img
            className="cloud-image"
            src={eachReport.cloudImage}
            alt={eachReport.degree}
          />
          <p className="time">{eachReport.time}</p>
        </li>
      ))}
    </ul>
    <h1 className="bottom-sec-title">
      Next Forecast <FaRegCalendarAlt className="calender" />
    </h1>
    <ul className="bottom-ul">
      {nextForecast.map(each => (
        <li className="bottom-li">
          <p className="bottom-date">{each.date}</p>
          <div className="image-deg">
            <img
              className="bottom-image"
              src={each.cloudImage}
              alt={each.degree}
            />
            <p className="bottom-degree">{each.degree}</p>
          </div>
        </li>
      ))}
    </ul>
  </>
)

export default ForecastingReport
