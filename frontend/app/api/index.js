import axios from "axios";
// import { getToken } from "./helper";

const SERVER_URL = "http://localhost:3001";

// const register = userInfo => axios.post(`${SERVER_URL}/register`, userInfo);
const login = userInfo => axios.post(`${SERVER_URL}/login`, userInfo);

const register = userInfo => {
    
    console.log('api.register:::', userInfo)
    
    axios.post(`${SERVER_URL}/register`, userInfo)
};
// const getSecret = uid =>
//   axios.get(`${SERVER_URL}/secret/${uid}`, {
//     headers: { authorization: `Bearer ${getToken()}` }
//   });

const api = {
  register,
//   getSecret,
  login
};
export default api;



// import { baseUrl } from '../config/apiConfig';
// import ApiClient from './ApiClient';
// import { mandatory } from '../utils/validationHelper';

// import MovieSearchAPI from './customAPI';

// function apiFactory(baseURL = mandatory('baseURL')) {
//     const api = new ApiClient( baseURL );

//     return {
//         OMDb: new MovieSearchAPI({ apiClient: api }),
//     };
// }

// export default apiFactory('http://localhost:3003/api/search?keyword=Star');