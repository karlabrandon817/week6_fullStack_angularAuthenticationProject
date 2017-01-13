var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  description: {type: String, required: true},
  user: {type: String, required: true},
  image_url: String
});

var Item = mongoose.model('items', ItemSchema);
module.exports = Item;
