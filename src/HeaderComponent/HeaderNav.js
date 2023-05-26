import React from 'react'
import { NavLink } from 'react-router-dom'
const HeaderNav = () => {
  return (
    <div>
      <>
      <header>
                <a href="#">LoGo</a>
                <nav>
                    <ul className="back">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
      </>
    </div>
  )
}

export default HeaderNav
