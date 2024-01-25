import React from 'react'
import "./Layout.css"
import {Outlet , Link} from "react-router-dom"
export default function Layout() {
  return (
    <div>
        <nav>
            <ul className='nav'>
                <li className='inside'>
                    <Link to ="/">Home</Link>
                </li>
                <li className='inside'><Link to ="/about">About</Link></li>
                <li className='inside'><Link to ="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
