import express from 'express'
import { deleteUser } from '../handlers/user'

const app = express.Router()

app.get('/user', (req, res) => {
  // console.log(req.headers.authorization)
  console.log(req.user)
  res.status(200).json({ message: 'Hello user' })
})

app.get('/user/admin', (req, res) => {
  // console.log(req.headers.authorization)
  console.log(req.user.role)
  res.status(200).json({ message: 'Hello user admin' })
})

app.delete('/user/delete', deleteUser)

export default app