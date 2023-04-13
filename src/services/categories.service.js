import PocketbaseService from "./pocketbase.service.js";

class CategoriesService {
    static DB_NAME = "car_categories";
    constructor() {
        this.db = PocketbaseService.pocketbase;
        this.collection = this.db.collection(CategoriesService.DB_NAME);
    }

    async getCategories() {
        return await this.collection.getFullList();
    }


    async getCategory(id) {
        return await this.collection.getElementById(id);
    }

    async addCategory(category) {
        return await this.collection.add(category);
    }

    async updateCategory(category) {
        return await this.collection.update(category);
    }

    async deleteCategory(id) {
        return await this.collection.delete(id);
    }
}

export default new CategoriesService();