import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='menu'>
            <ul>
                <li >
                    <Link to={'/'}  > Home</Link>
                </li>
                <li >
                    <Link to={'/todo'}  > TO DO  </Link>
                </li>
                
                 
                <li >
                    <Link to={'/tictoc'}  > Tic Tac Toe</Link>
                </li>
                
                <li >
                    <Link to={'/puzzle'}  > Number Puzzle</Link>
                </li>
                <li >
                    <Link to={'/converter'}  > Currency Converter  </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header