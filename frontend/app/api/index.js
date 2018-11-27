// import { baseUrl } from '../config/apiConfig';
import ApiClient from './ApiClient';
import { mandatory } from '../utils/validationHelper';

import MovieSearchAPI from './customAPI';

function apiFactory(baseURL = mandatory('baseURL')) {
    const api = new ApiClient( baseURL );

    return {
        OMDb: new MovieSearchAPI({ apiClient: api }),
    };
}

export default apiFactory('http://localhost:3003/api/search?keyword=Star');