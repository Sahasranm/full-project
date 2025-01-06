import React from 'react'
import{Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <ul>
        <li><Link to="/" >Login</Link></li>
        <li><Link to="/SignUp">SignUP</Link></li>
      </ul>
    </div>
  )
}

export default Header
