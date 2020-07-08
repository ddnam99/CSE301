const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

const authenticationControllers = require('./controllers/authentication.controller')
const logger = require('./helpers/logger')

dotenv.config()
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(authenticationControllers.isAuth)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

require(path.resolve('./routes/users.route'))(app)

const option = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}

mongoose
  .connect(process.env.DB_URL, option)
  .then(() => {
    const server = app.listen(process.env.PORT, () => {
      logger.info('Listening on ' + process.env.PORT)
    })
  })
  .catch((err) => {
    logger.info(`Could not connect to the database. Exiting now...\n${err}`)
    process.exit()
  })

module.exports = app
