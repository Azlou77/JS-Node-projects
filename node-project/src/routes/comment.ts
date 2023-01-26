import { Request, RequestHandler, Response, Router } from "express";
import { body, check, validationResult } from "express-validator";
import db from "../db";

const app = Router()

//Request to display all comments
// app.get('/post', async (req, res) => {
//   const post = await db.post.findMany({
//     where: {
//       authorId: req.user.id
//     },
//     include: {
//       Comment: true
//     }
//   })
//   return res.status(200).json(post)
// })


//Request to display a specific comment by id
// app.get(
//   '/todo/:uuid',
//   async (req, res) => {
//     try {
//       const todo = await db.post.findFirstOrThrow({
//         where: {
//           id: req.params.uuid,
//           authorId: req.user.id
//         },
//         include: {
//           Comment: true
//         }
//       })

//       return res.status(200).json(todo)
//     } catch(e) {
//       return res.status(400).json({ message: 'Not found' })
//     }
//   }
// )

  //Request to create a new post
  app.post(
    '/post',
  body('title').exists().isString().notEmpty(),
  async (req: Request, res: Response) => {
    try {
      validationResult(req).throw()
      const createPost = await db.post.create({
        data: {
          title: req.body.title,
          authorId: req.user.id,
        }
      })

      return res.status(200).json(createPost)
    } catch(e) {
      console.log(e)
      return res.status(400).json({error: e || 'Cannot create Post'})
    }
})


// app.put('/todo/:uuid', body('name').exists().isString().notEmpty(), async (req, res) => {
//   try {
//     validationResult(req).throw()
//     const updatedTodoList = await db.todoList.update({
//       where: {
//         id: req.params?.uuid,
//       },
//       data: {
//         name: req.body.name
//       }
//     })

//     return res.status(200).json(updatedTodoList)
//   } catch(e) {
//     return res.status(400).json({message: e || 'Error while updating'})
//   }
// })

// app.delete('/todo/:uuid', async (req, res) => {
//   try {
//     await db.todoList.delete({
//       where: {
//         id: req.params.uuid
//       }
//     })

//     return res.status(200).json({message: `Succesfully deleted ${req.params.uuid}`})
//   } catch(e) {
//     return res.status(400).json({message: e || 'Error while deleting'})
//   }
// })

export default app