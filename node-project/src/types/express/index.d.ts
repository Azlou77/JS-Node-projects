import { Post, User} from "@prisma/client";

declare global {
    namespace Express {
           export interface Request {
            user: User;
      
        }
        export interface Request {
            from: Post;
    }
}
}

