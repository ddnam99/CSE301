const logger = require('../helpers/logger')
const Room = require('../models/room.model')

exports.create = async (req, res) => {
  try {
    let room = new Room(req.body)
    room.createBy = req.user

    await room.save()

    return res.jsonp({
      message: 'success',
      id: room._id,
    })
  } catch (error) {
    logger.error(error)
    return res.status(500).jsonp({
      message: error,
    })
  }
}

exports.list = async (req, res) => {
  try {
    const rooms = await Room.find({})
      .select({
        createBy: 0,
      })
      .lean()

    return res.jsonp({ message: 'success', users: rooms })
  } catch (error) {
    logger.error(error)
    return res.status(500).jsonp({
      message: error,
    })
  }
}
