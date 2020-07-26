module.exports = (app) => {
  const rooms = require('../controllers/rooms.controller')

  app.route('/api/rooms').get(rooms.list).post(rooms.create)
}
