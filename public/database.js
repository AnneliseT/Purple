    var Schema = mongoose.Schema;
    ObjectID = Schema.ObjectId;
    var userCart = new Schema({
        userId: Number,
        itemName: String,
        itemValue: Number,
        itemCategory: String
    })
    var cartModel = mongoose.model('cart', userCart);
    var cartLog = new cartModel({
        userId: "01",
        itemName: "apple",
        itemValue: 1.1,
        itemCategory: "Food"
    })
    cartLog.save(function (err) {
        if (err) {
            console.log('save error:' + err);
        }

        console.log('save sucess');
    });