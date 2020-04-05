import express from "express";
import routes from "../router";
import { users, users_detail, edit_profile, change_password } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users)
userRouter.get(routes.userDetail, users_detail)
userRouter.get(routes.editProfile, edit_profile)
userRouter.get(routes.changePassword, change_password)


export default userRouter;

