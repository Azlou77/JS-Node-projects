
import { RequestHandler, Router } from 'express'
import db from '../db'
import { body, validationResult } from 'express-validator'
const router = Router()


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


//Request to create a new comment
// router.post(
//   '/comment',
//   body('postId').isUUID(),
//   body('content').isString(),
//   async (req, res) => {
//     try {
//       validationResult(req).throw()
//       const createComment  = await db.comment.create({
//         data: {
//           postId: req.body.postId,
//           content: req.body.content,
//         },
//       })

//       return res.status(201).json(createComment)
//     } catch (e) {
//       return res.status(400).json({ message: e || 'Error during creation'})
//     }
//   }
// )

// router.put(
//   '/todoItem/:uuid',
//   isUsersItem,
//   body('description').isLength({ min: 1 }),
//   async (req, res) => {
//     try {
//       validationResult(req).throw()
//       const updatedItem = await db.todoItem.update({
//         where: {
//           id: req.params?.uuid
//         },
//         data: {
//           description: req.body.description
//         }
//       })
//       res.status(200).json(updatedItem)
//     } catch(e) {
//       return res.status(400).json({ message: e || 'Error during update'})
//     }
//   }
// )
// router.delete(
//   '/todoItem/:uuid',
//   isUsersItem,
//   async (req, res) => {
//     try {
//       const deletedId = req.params.uuid
//       await db.todoItem.delete({
//         where: {
//           id: deletedId
//         }
//       })
//       res.status(200).json({ message: `Successfully deleted ${deletedId}`})
//     } catch(e) {
//       return res.status(400).json({ e: e || 'Error during deletion'})
//     }
//   }
// )
export default router
