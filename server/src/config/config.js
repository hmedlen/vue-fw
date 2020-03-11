module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'template1',
    user: process.env.DB_USER || 'huntermedlen',
    password: process.env.DB_PASS || 'password',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
      storage: './myproject.pg'
    }
  }
}