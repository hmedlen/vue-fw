const {User} = require('../models')


module.exports = {
  // register (req, res) {
  //   res.send({
  //     message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  //   })
  // }

  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  }
}