import PocketbaseService from "./pocketbase.service.js";

class CarsService {
    static DB_NAME = "cars";
    constructor() {
        this.db = PocketbaseService.pocketbase;
        this.collection = this.db.collection(CarsService.DB_NAME);
    }

    async getCars() {
        return await this.collection.getFullList();
    }

    async getCarsPaginated(page, pageSize) {
        return await this.collection.getList(page, pageSize)
    }

    async getCarsByCategoryPaginated(category, page, pageSize) {
        if (!category || category === 'all') return await this.collection.getList(page, pageSize);
        return await this.collection.getList(page, pageSize,{
            filter: `category = "${category}"`,
        })
    }

    async getCarsByCategory(category) {
        return await this.collection.getFullList({
            filter: `category = "${category}"`,
        })
    }

    async getCar(id) {
        return await this.collection.getElementById(id);
    }

    async addCar(car) {
        return await this.collection.add(car);
    }

    async updateCar(car) {
        return await this.collection.update(car);
    }

    async deleteCar(id) {
        return await this.collection.delete(id);
    }
}

export default new CarsService();