const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const adminSchema = new Schema({
      username: {
            type: String,
            max:  255,
            required:   true
      },
      googleId: {
            type: String,
            max: 2048,
            required: true
      }
})

module.exports = mongoose.model('admin', adminSchema)