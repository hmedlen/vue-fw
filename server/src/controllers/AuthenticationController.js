const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  // register (req, res) {
  //   res.send({
  //     message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  //   })
  // }

  async register (req, res) {
    try {
      const user = await User.create(req.body)
      // res.send(user.toJSON())
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }
      // const isPasswordValid = password === user.password
      const isPasswordValid = await user.comparePassword(password)
      console.log("umm", password);
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      console.log("fucking what????")
      // 500 Error b/cus if failed to make the sequelize call then that means theres something wrong with server
      res.status(500).send({
        error: 'An error has occured trying to log in.'
      })
    }
  }
}