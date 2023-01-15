import './index.css'
import ThemeContext from '../../context/ThemeContext'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const changeTheme = () => {
          toggleTheme()
        }
        const lightMode = () => {
          return (
            <nav className="navbar-cont">
              <button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="logo-img"
                />
              </button>
              <ul className="home-about-cont">
                <Link className="link" to="/">
                  <li className="routes">
                    <h1>Home</h1>
                  </li>
                </Link>
                <Link className="link" to="/about">
                  <li className="routes">
                    <h1>About</h1>
                  </li>
                </Link>
              </ul>
              <button onClick={changeTheme} testid="theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="logo-img"
                />
              </button>
            </nav>
          )
        }

        const darkMode = () => {
          return (
            <nav className="navbar-cont dark-navbar-cont">
              <button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="logo-img"
                />
              </button>
              <ul className="home-about-cont">
                <Link className="link" to="/">
                  <li className="routes dark">
                    <h1>Home</h1>
                  </li>
                </Link>
                <Link className="link" to="/about">
                  <li className="routes dark">
                    <h1>About</h1>
                  </li>
                </Link>
              </ul>
              <button onClick={changeTheme} testid="theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="logo-img"
                />
              </button>
            </nav>
          )
        }
        return <>{isDarkTheme ? darkMode() : lightMode()}</>
      }}
    </ThemeContext.Consumer>
  )
}

export default Navbar
