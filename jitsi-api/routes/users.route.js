module.exports = (app) => {
  const users = require('../controllers/users.controller')
  const authenticationControllers = require('../controllers/authentication.controller')

  app
    .route('/users')
    .get(authenticationControllers.isSuperuser(), users.list)
    .post(authenticationControllers.isSuperuser(), users.create)
  app.route('/users/login').post(users.login)
  app.route('/users/change-pass').put(users.changePass)
  app
    .route('/users/:email')
    .get(users.read)
    .delete(authenticationControllers.isSuperuser(), users.delete)
  app.param('email', users.userByEmail)
}
