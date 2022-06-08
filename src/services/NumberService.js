import axios from 'axios'

const NUMBERS_REST_API_URL = 'http://localhost:8080/testNumbers';


class NumberService{

    getNumbers(){
        return axios.get(NUMBERS_REST_API_URL);
    }
}
export default new NumberService();