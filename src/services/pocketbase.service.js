import Pocketbase from 'pocketbase';

class PocketbaseService {
    constructor() {
        this._pocketbase = new Pocketbase("http://127.0.0.1:8090");
    }

    get pocketbase() {
        return this._pocketbase;
    }
}

export default new PocketbaseService();