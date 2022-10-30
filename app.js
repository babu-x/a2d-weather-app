const express = require('express')
const {open} = require('sqlite')
const bcrypt = require('bcrypt')
const sqlite3 = require('sqlite3')
const cors = require('cors')
const path = require('path')

const dbPath = path.join(__dirname, 'weatherapp.db')

const app = express()
module.exports = app

app.use(express.json())
app.use(cors())

let db = null

const initializeAndDBServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server is running at http://localhost:3000/')
    })
  } catch (error) {
    console.log(`DB Error: ${error.message}`)
  }
}

initializeAndDBServer()

// create user
app.post('/create-users/', async (request, response) => {
  const {email, password} = request.body
  const hashedPassword = await bcrypt.hash(password, 10)
  const selectedUser = `SELECT * FROM user WHERE email = '${email}';`
  const dbUser = await db.get(selectedUser)
  if (dbUser === undefined) {
    const createUser = `INSERT INTO 
    user (email, password)
      VALUES (
          '${email}',
          '${hashedPassword}'
      );`
    await db.run(createUser)
    response.send('user created successfully')
  } else {
    response.status(400)
    response.send('user already exits')
  }
})

// login user

app.post('/login/', async (request, response) => {
  const {email, password} = request.body
  const selectedUser = `SELECT * FROM user WHERE email = '${email}'`
  const dbUser = await db.get(selectedUser)
  if (dbUser === undefined) {
    response.status(400)
    response.send('Invalid User')
  } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password)
    if (isPasswordMatched === true) {
      response.send('Login Success')
    } else {
      response.status(400)
      response.send('Invalid Password')
    }
  }
})
