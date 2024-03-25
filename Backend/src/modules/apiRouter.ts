// routes all endpoints: /users, /posts, /comments
// exports {usersRouter, postsRouter, usersRouter}

import { Router } from "express";

import * as users from "./requestHandlers/usersReqHandlers.js";
import * as posts from "./requestHandlers/postsReqHandlers.js";
import * as comments from "./requestHandlers/commentsReqHandlers.js";
import {
  validate,
  userValidations,
  postValidations,
  commentValidations,
} from "./middleware/validator.js";

import { addUserInfo } from "./middleware/addUserInfo.js";

const apiRouter = Router();

// Users Endpoints
apiRouter
  .route("/users")
  .get(users.getAllUsers)
  .post(validate(userValidations), users.createUser);

apiRouter
  .route("/users/:userId")
  .get(users.getOneUser)
  .delete(users.deleteUser);

apiRouter
  .route("/users/:userId/posts")
  .get(posts.getAllPostsbyUser)
  .post(addUserInfo, validate(postValidations), posts.createPost);

apiRouter.route("/users/:userId/comments").get(comments.getAllCommentsByUser);

apiRouter.route("/users/:userId/posts/:postId").delete(posts.deletePost);

// Posts routes
apiRouter.route("/posts").get(posts.getAllPosts);

apiRouter.route("/posts/:postId").get(posts.getOnePost);

// Comments routes
apiRouter.route("/comments").get(comments.getAllComments);
apiRouter.route("/comments/:commentId").get(comments.getOneComment);

apiRouter
  .route("/posts/:postId/users/:userId/comments")
  .post(addUserInfo, validate(commentValidations), comments.addComment);

apiRouter
  .route("/posts/:postId/users/:userId/comments/:commentId")
  .delete(comments.deleteComment);

export { apiRouter };
