var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var cartSchema = new Schema({
    userId: Number,
    itemName: String,
    itemValue: Number,
    itemCategory: String
});
var cart = mongodb.mongoose.model("cart", cartSchema);
var cartDAO = function(){};
module.exports = new cartDAO();

cartDAO.prototype.findByName = function(name, callback) {
    cart.findOne({name:name}, function(err, obj){
        callback(err, obj);
    });
};