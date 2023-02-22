// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </div>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </ul>
  </div>
)

export default Header
