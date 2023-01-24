// import { Request, RequestHandler } from "express";
// import db from "../db";
// import { createJWT, hashPassword } from "../modules/auth";

// interface TypedRequestParam extends Request {
//   body: {
//     username?: string;
//     password?: string;
//   }
// }

// export const createNewUser: RequestHandler = async (req: TypedRequestParam, res) => {

//   try {
//     if (!(req.body?.username && req.body?.password)) {
//       throw new Error('Invalid body provided')
//     }

//     const hash = await hashPassword(req.body.password)

//     const user = await db.user.create({
//       data: {
//         username: req.body.username,
//         password: hash,
//       }
//     })

//     const token = createJWT(user)

//     return res.status(201).json({ token })
//   } catch(e) {
//     res.status(400).json({ error: e })
//   }
// }