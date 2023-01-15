import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar/index'

const NotFound = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const lightMode = () => {
          return (
            <div className="home-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1 className="not-found-heading">Lost Your Ways?</h1>
              <p className="para">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          )
        }
        const darkMode = () => {
          return (
            <div className="home-cont dark-home-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1 className="dark-not-found-heading">Lost Your Ways?</h1>
              <p className="dark-para">
                We cannot seem to find the page you are looking for.
              </p>
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

export default NotFound
