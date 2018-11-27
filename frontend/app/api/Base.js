import { mandatory } from '../utils/validationHelper';

class Base {
    constructor({ apiClient = mandatory('apiClient') }) {
        this.apiClient = apiClient;
    }
}

export default Base;