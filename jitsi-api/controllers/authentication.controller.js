const jwt = require('jsonwebtoken')
const logger = require('../helpers/logger')
const helpers = require('../helpers/helper')
const User = require('../models/user.model')
const rolesConst = require('../constants/roles.const')

exports.isAuth = async (req, res, next) => {
  try {
    if (req.originalUrl === 'api/users/login' || req.originalUrl.startsWith('api/docs')) return next()

    if (!req.headers.authorization) return res.status(403).json({ message: 'no token' })

    const user = await User.findOne({ token: req.headers.authorization }).exec()

    if (!(user && user.token)) return res.status(401).json({ message: 'Unauthorized' })

    jwt.verify(req.headers.authorization, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
      if (err) return res.status(401).json({ message: 'Unauthorized' })

      req.user = decode
      req.body = req.body && helpers.removeBodyKeysNull(req.body)

      next()
    })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({ message: error })
  }
}

exports.isSuperuser = () => {
  return (req, res, next) => {
    if (req.user.roles.includes('SUPERUSER')) return next()

    return res.status(401).json({
      message: 'Unauthorized',
    })
  }
}
