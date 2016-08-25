var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Card = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  listId: { type: String, required: true }
});

module.exports = mongoose.model('Card', Card);
