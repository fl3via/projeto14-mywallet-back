import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { userSchema } from "../app.js"
import { signUp } from "../src/controller/cadastroController"

const autoRouter = Router()

autoRouter.post('/cadastro', validateSchema(userSchema), signUp)
autoRouter.post('/login')

export default autoRouter