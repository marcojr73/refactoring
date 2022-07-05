import { Router } from "express"
import { signin, signUp } from "../controllers/authController.js"

const routersAuth = Router()

routersAuth.post("/sign-up", signUp)
routersAuth.post("/sign-in", signin)

export default routersAuth