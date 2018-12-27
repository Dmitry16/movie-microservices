// import 'whatwg-fetch';
// import axios from 'axios';
import queryString from 'query-string';

class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            data: payload,
            params,
        });
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }

    parseJSON(response) {
        if (response.status === 204 || response.status === 205) {
          return null;
        }
        return response.json();
      }

    request({ url, method, params = {}, headers, data }) {
        const config = {
            url,
            method,
            baseURL: this.baseURL,
            params,
            paramsSerializer(p) {
                return queryString.stringify(p, { encode: true });
            },
            headers: headers || { 'Content-Type': 'application/json' },
            data,
        };

        // Add a request interceptor
        // axios.interceptors.request.use(
        //     (request) => request,
        //     (error) => Promise.reject(error)
        // );

        // // Add a response interceptor
        // axios.interceptors.response.use(
        //     (response) => response,
        //     (error) => Promise.reject(error)
        // );

        // return axios(config).then(
        //     (response) => Promise.resolve(response.data),
        //     (response) => Promise.reject(response.data)
        // );
        return fetch(url, options)
        .then(this.checkStatus)
        .then(this.parseJSON);
    }
}

export default ApiClient;
