import PocketbaseService from "./pocketbase.service.js";

class NewsService {
    static DB_NAME = "news";
    constructor() {
        this.db = PocketbaseService.pocketbase;
        this.collection = this.db.collection(NewsService.DB_NAME);
    }

    async getNews() {
        return await this.collection.getFullList();
    }

    async getActiveNews() {
        return await this.collection.getFullList({is_visible: true});
    }

    async getNewsById(id) {
        return await this.collection.getElementById(id);
    }

    async addNews(news) {
        return await this.collection.add(news);
    }

    async updateNews(news) {
        return await this.collection.update(news);
    }

    async deleteNews(id) {
        return await this.collection.delete(id);
    }
}

export default new NewsService();