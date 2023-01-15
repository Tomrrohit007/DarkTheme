import './index.css'
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'

const Home = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const lightMode = () => {
          return (
            <div className="home-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-img"
              />
            </div>
          )
        }
        const darkMode = () => {
          return (
            <div className="home-cont dark-home-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
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

export default Home
