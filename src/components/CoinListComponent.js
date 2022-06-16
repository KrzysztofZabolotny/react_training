import React from 'react';
import CoinService from '../services/CoinService';
import { Link } from "react-router-dom";

class CoinComponent extends React.Component{

constructor(props){
    super(props)
    this.state = {
        coins:[]
    }
}

componentDidMount(){
    CoinService.getAllCoinsNames().then((response) =>{
        this.setState({ coins: response.data})
    });
}

render(){
    return(
        <React.Fragment>
        <div>
            <h1 className='text-center'>Coins available for monitoring</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>name</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.coins.map(
                            coin =>
                            <tr key = {coin.id}>
                                <td> {coin.name} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <div>
        <Link to="/home">Click here for home</Link>

    </div>
    </React.Fragment>
    )
}
}
export default CoinComponent;