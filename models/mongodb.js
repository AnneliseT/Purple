var mongoose = require('mongoose');
const user = "teampurple";
const password = "123456";
var url='mongodb://' + user + ':' + password + '@ds163020.mlab.com:63020/purple';
mongoose.connect(url);
exports.mongoose = mongoose;
