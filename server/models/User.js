const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  productId: Array,
});

mongoose.model('users', userSchema);
