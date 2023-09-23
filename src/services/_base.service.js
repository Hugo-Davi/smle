class Service {
    constructor(collectionModel) {
        this.collection = collectionModel
    }
    findAll() {
        return this.collection.find().lean().exec();
    }
    findById(id) {
        return this.collection.findById(id);
    }
    create(model) {
        return this.collection.create(model);
    }
    update(id, model) {
        return this.collection.findByIdAndUpdate(id, model);
    }
    delete(id) {
        return this.collection.findByIdAndDelete(id);
    }

    // idPars(id) {
    //     const pattern = /(.*\(+.)|(["]+\))/ig;
    //     return String(id).replace(pattern, '');
    // }
}
module.exports = Service;