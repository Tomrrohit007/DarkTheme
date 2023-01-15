import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar/index'

const About = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const lightMode = () => {
          return (
            <div className="home-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="home-img"
              />
            </div>
          )
        }
        const darkMode = () => {
          return (
            <div className="home-cont dark-home-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="home-img"
              />
            </div>
          )
        }
        return (
          <div className="main-cont">
            <Navbar />
            {isDarkTheme ? darkMode() : lightMode()}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default About
