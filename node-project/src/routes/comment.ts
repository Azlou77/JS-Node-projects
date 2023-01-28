import { RequestHandler, Router } from 'express'
import db from '../db'
import { body, validationResult } from 'express-validator'
const router = Router()

const isUsersComment: RequestHandler = async (req, res, next) => {
    try {
        if (req.user.role == "ADMIN") {
            return next()
        }
        const isOwner = await db.comment.findFirstOrThrow({
            where: {
                authorId: req.user.id
            }
        })
        if (isOwner) {
            return next()
        }
        throw new Error('You should not be here')
    } catch (e) {
        return res.status(400).json({ message: 'You are not the owner' })
    }
  }

// const isUsersItem: RequestHandler = async (req, res, next) => {
//   try {
//     const isOwner = await db.todoItem.findFirstOrThrow({
//       where: {
//         todoList: {
//           userId: req.user.id
//         },
//       }
//     })
//     if (isOwner) {
//       return next()
//     }
//     throw new Error('You should not be here')
//   } catch(e) {
//     return res.status(400).json({ message: 'You are not the owner' })
//   }
// } 


export default router