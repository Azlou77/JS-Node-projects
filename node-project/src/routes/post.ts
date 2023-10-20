import { Request, RequestHandler, Response, Router } from "express";
import { body, check, validationResult } from "express-validator";
import db from "../db";

const app = Router()
const isUsersPost: RequestHandler = async (req, res, next) => {
  try {
      if (req.user.role == "ADMIN") {
          return next()
      }
      const isOwner = await db.post.findFirstOrThrow({
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
//Request to create a new post
app.post(
  '/post/create',
body('title').exists().isString().notEmpty(),
async (req: Request, res: Response) => {
  try {
    validationResult(req).throw()
    const createPost = await db.post.create({
      data: {
        title: req.body.title,
        content : req.body.content,
        authorId: req.user.id,
      }
    })

    return res.status(200).json(createPost)
  } catch(e) {
    console.log(e)
    return res.status(400).json({error: e || 'Cannot create Post'})
  }
}) 

//Request to read all post
app.get('/post/', async (req, res) => {
  const readPost = await db.post.findMany({
    where: {
      title : req.body.title,
    },
    // include: {
    //   Comment: true
    // }
  })
  return res.status(200).json(readPost)
})

//Request to delete a specific post by id
app.delete('/post/delete/:uuid', async (req, res) => {
  try {
   await db.post.delete({
      where: {
        id: req.params.uuid
      }
    })

    return res.status(200).json({message: `Succesfully deleted ${req.params.uuid}`})
  } catch(e) {
    return res.status(400).json({message: e || 'Error while deleting post'})
  }
})


  // //Request to display a specific post by from (query parameter)
  // app.get(
  //   '/post',
  //   async (req, res) => {
  //     try {
  //       const post = await db.post.findUnique({
  //         where: {
  //           createdAt : req.query.from,
  //         },
      
  //       })



  //       return res.status(200).json(post)
  //     } catch(e) {
  //       return res.status(400).json({ message: 'Not found' })
  //     }
  //   }
  // )

  


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


export default app