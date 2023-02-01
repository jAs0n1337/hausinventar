import React from 'react'
import { Link } from 'react-router-dom'
import './NavComponent.css'

function NavComponent() {
    return (
        <div className='Navbar'>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/BigStuff'}>Big stuff</Link>
                    <Link to={'/NotSoBigStuff'}>Not so Big stuff</Link>
                    <Link to={'/SmallStuff'}>SmallStuff</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavComponent