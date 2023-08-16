import React from 'react'
import './header.css'
import Headerli from './header-li'

function Header() {
  return  <header className="header">
                <nav className='nav' >
                    <ul className='nav__list'>
                        <Headerli link="Home"/>
                        <Headerli link="Products"/>
                        <Headerli link="Contac"/>
                        <Headerli link="Help"/>
                    </ul>
                </nav>
            </header>

}

export default Header;
