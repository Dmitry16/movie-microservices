import Base from './Base';

class MovieSearchAPI extends Base {

    getMovies() {
        return this.apiClient.get(url, {}, query);
    }

    // login(params) {
    //   // TODO: must be replaced with server request.
    //   // LocalStorage is used for demo purposes only
    //     return new Promise((resolve, reject) => {
    //         let user = LocalStorage.get(params.email);
    //         if (user && params.password === user.password) {
    //             resolve(user);
    //         } else {
    //             reject(new Error('Password is wrong'));
    //         }
    //     });
    // }
}

export default MovieSearchAPI;
