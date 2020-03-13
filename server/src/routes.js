const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ProjectController = require('./controllers/ProjectController')

module.exports = (app) => {

  // app.get('/status', (req, res) => {
  //   res.send({
  //     message: 'hello world!'
  //   })
  // })

  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    ProjectController.getAllSongs)

  app.post('/songs',
    ProjectController.postSong)

  app.put('/songs',
    ProjectController.putSong)

  app.get('/song/:songId',
    ProjectController.show)
}
