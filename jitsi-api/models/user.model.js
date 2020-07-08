const mongoose = require('mongoose')
const rolesConst = require('../constants/roles.const')
const modelConst = require('../constants/model.const')

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  roles: [{ type: String, enum: rolesConst.ROLES, required: true }],
  token: [{ type: String }],
  password: { type: String, required: true },
})

module.exports = mongoose.model(modelConst.USER, UserSchema)
