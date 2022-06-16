import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../static/img/crypto.jpg'
import chart from '../static/img/chart.png'


function Home() {

    return (
        <div>
            <div className='navbar'>
                <div class="navbar">
                    <Link to="/home">Go Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>



            <div className='container'>
                <div class="row">
                    <div class="col">
                        <img src={logo} alt="logo" width="250" height="250"></img> <br />
                        <Link to="/coins">Coins</Link></div>
                    <div class="col">
                    <img src={chart} alt="chart" width="350" height="250"></img> <br />
                        <Link to="/chart">Charts</Link></div>
                    <div class="w-100"></div>
                    <div class="col"><Link to="/coins">Coins</Link></div>
                    <div class="col"><Link to="/available-coins">Available Coins</Link></div>
                </div>
            </div>


        </div>

    )
}
export default Home;