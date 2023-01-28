import { Role, Post, User} from "@prisma/client";

declare global {
    namespace Express {
           export interface Request {
            user: User,
            role: Role,
            posts: Post
        }
      
    }
}


