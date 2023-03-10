import express from 'express'
import * as dotenv from 'dotenv'
import db from './db'
import userRoutes from './routes/user'
import postRoutes from './routes/post'
import commentRoutes from './routes/comment'
import { protect, protectAdmin } from './modules/auth'
import { createNewUser, deleteUser,  signIn } from './handlers/user'

dotenv.config()

const app = express()
const PORT = 1234

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello' })
})

//Request with middleware, access if token is valid
app.use('/api', protect, [
  userRoutes,
  postRoutes,
  commentRoutes
])

//Request with middleware, access if token is valid
app.use('/api/admin', protectAdmin, [
  userRoutes,
  postRoutes,
  commentRoutes
])

//Request to create new user and register
app.post('/signUp', createNewUser)


//Request to connect a user
app.post('/signIn', signIn)


//Request to delete a user
app.delete('/user/delete', deleteUser)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

