import React from 'react';
import {Link} from 'react-router-dom'

function Home(){
    return(
        <React.Fragment>
     <Link to="/home">Go Home</Link><br/>
    <Link to="/coins">Go to coins</Link><br/>
    <Link to="/chart">Go to charts</Link><br/>
        </React.Fragment>
    )
}
export default Home;