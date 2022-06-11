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
    CoinService.getCoins().then((response) =>{
        this.setState({ coins: response.data})
    });
}

render(){
    return(
        <React.Fragment>
        <div>
            <h1 className='text-center'>Coins List</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>symbol</td>
                        <td>price</td>
                        <td>currency</td>
                        <td>date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.coins.map(
                            coin =>
                            <tr key = {coin.id}>
                                <td> {coin.id} </td>
                                <td> {coin.name} </td>
                                <td> {coin.symbol} </td>
                                <td> {coin.price} </td>
                                <td> {coin.currency} </td>
                                <td> {coin.date} </td>

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