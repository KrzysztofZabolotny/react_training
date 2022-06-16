import axios from 'axios'

const COINS_REST_API_URL = 'http://localhost:8080/coins';
const COIN_NAMES_REST_API_URL = 'http://localhost:8080/coins/available-coins';


class CoinsService{

    getCoins(){
        return axios.get(COINS_REST_API_URL);
    }
    getAllCoinsNames(){
        return axios.get(COIN_NAMES_REST_API_URL);
    }
}
export default new CoinsService();