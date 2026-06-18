import express from "express"
import { getUsers, getUsersById, createUser,
    deleteUser, updateUser
 } from "../controllers/userControllers.js"
import { validateUser } from "../middleware/userValidator.js"

const routes = express.Router()

routes.get("/users", getUsers)
routes.get("/users/:id", getUsersById)
routes.post("/users", validateUser, createUser)
routes.delete("/users/:id", deleteUser)
routes.put("/users/:id", validateUser, updateUser)

export default routes