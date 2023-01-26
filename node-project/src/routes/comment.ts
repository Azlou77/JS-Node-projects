import { Request, RequestHandler, Response, Router } from "express";
import { body, check, validationResult } from "express-validator";
import db from "../db";

const app = Router()


app.get('/todos', async (req, res) => {
  const todos = await db.todoList.findMany({
    where: {
      userId: req.user.id
    },
    include: {
      todoItems: true
    }
  })
  return res.status(200).json(todos)
})

app.get(
  '/todo/:uuid',
  async (req, res) => {
    try {
      const todo = await db.todoList.findFirstOrThrow({
        where: {
          id: req.params.uuid,
          userId: req.user.id
        },
        include: {
          todoItems: true
        }
      })

      return res.status(200).json(todo)
    } catch(e) {
      return res.status(400).json({ message: 'Not found' })
    }
  }
)


app.post(
  '/todo',
  body('name').exists().isString().notEmpty(),
  async (req: Request, res: Response) => {
    try {
      validationResult(req).throw()
      const createdTodoList = await db.todoList.create({
        data: {
          name: req.body.name,
          userId: req.user.id
        }
      })

      return res.status(200).json(createdTodoList)
    } catch(e) {
      console.log(e)
      return res.status(400).json({error: e || 'Cannot create todoList'})
    }
})

app.put('/todo/:uuid', body('name').exists().isString().notEmpty(), async (req, res) => {
  try {
    validationResult(req).throw()
    const updatedTodoList = await db.todoList.update({
      where: {
        id: req.params?.uuid,
      },
      data: {
        name: req.body.name
      }
    })

    return res.status(200).json(updatedTodoList)
  } catch(e) {
    return res.status(400).json({message: e || 'Error while updating'})
  }
})

app.delete('/todo/:uuid', async (req, res) => {
  try {
    await db.todoList.delete({
      where: {
        id: req.params.uuid
      }
    })

    return res.status(200).json({message: `Succesfully deleted ${req.params.uuid}`})
  } catch(e) {
    return res.status(400).json({message: e || 'Error while deleting'})
  }
})

export default app