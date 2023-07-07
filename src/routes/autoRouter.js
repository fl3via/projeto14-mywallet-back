import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { userSchema, loginSchema } from "../app.js"
import {  login ,signUp } from "../controller/cadastroController.js"

const autoRouter = Router()

autoRouter.post('/cadastro', validateSchema(userSchema), signUp)
autoRouter.post('/login', validateSchema(loginSchema), login)

export default autoRouter