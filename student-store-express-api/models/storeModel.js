const { storage } = require("../data/storage");
class Store {
    static async listProducts() {
        // console.log(storage.get("products").value())
        return storage.get("products").value();
    }
}

module.exports = Store;