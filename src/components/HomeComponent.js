import React from 'react';
import { Link } from 'react-router-dom'

function Home() {

    return (
        <div className='navbar'>
            <div class="navbar">
                <Link to="/home">Go Home</Link>
                <Link to="/coins">Coins</Link>
                <Link to="/chart">Charts</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}
export default Home;