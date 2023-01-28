import { User } from "@prisma/client";
import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const createJWT = (user: User) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET as string
  );

  return token
}

export const protect: RequestHandler = (req, res, next) => {
  const bearer = req.headers.authorization

  if(!bearer) {
    return res.status(401).json({ message: 'Not authorized' })
  }
  
  const [, token] = bearer.split(' ')
  
  if (!token) {
    return res.status(401).json({ message: 'Not authorized' })
  }
  
  try {
    if (typeof process.env.JWT_SECRET !== 'string') {
      return res.status(401).json({ message: 'Not authorized' })
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET) as User
    req.user = payload
    return next()
  } catch(e) {
    return res.status(401).json({ message: 'Not authorized' })
  }
}

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash)
}

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10)
}


export const protectAdmin: RequestHandler = (req, res, next) => {
  const bearer = req.headers.authorization

  if(!bearer) {
    return res.status(401).json({ message: 'Not authorized' })
  }

  const [, token] = bearer.split(' ')

  if (!token) {
    return res.status(401).json({ message: 'Not authorized' })
  }

  try {
    if (typeof process.env.JWT_SECRET !== 'string') {
      return res.status(401).json({ message: 'Not authorized' })
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET) as User
    req.user = payload
    return next()
  } catch(e) {
    return res.status(401).json({ message: 'Not authorized' })
  }
}

