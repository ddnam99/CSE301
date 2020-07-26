const mongoose = require('mongoose')
const modelConst = require('../constants/model.const')

const RoomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    createBy: { type: mongoose.Schema.Types.ObjectId, ref: modelConst.USER },
  },
  { timestamps: true }
)

module.exports = mongoose.model(modelConst.ROOM, RoomSchema)
