import express from 'express'
import * as dotenv from 'dotenv'
import db from './db'
import userRoutes from './routes/user'
import todoListRoutes from './routes/todoList'
import todoItemRoutes from './routes/todoItem'
import { protect } from './modules/auth'
import { createNewUser, signIn } from './handlers/user'

dotenv.config()

const app = express()
const PORT = 1234

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello' })
})

app.use('/api', protect, [
  userRoutes,
  todoListRoutes,
  todoItemRoutes
])
app.post('/signUp', createNewUser)
app.post('/signIn', signIn)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

