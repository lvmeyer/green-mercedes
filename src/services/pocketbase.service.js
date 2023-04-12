import Pocketbase from 'pocketbase';

class PocketbaseService {
    constructor() {
        this._pocketbase = new Pocketbase("http://127.0.0.1:8090");
    }

    get pocketbase() {
        return this._pocketbase;
    }

    getPictureUrl = (record, picture, options = {}) => {
        return `${import.meta.env.VITE_POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${picture}?${new URLSearchParams(options)}`;
    }
}

export default new PocketbaseService();