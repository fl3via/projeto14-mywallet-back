import axios from 'axios'
import dayjs from 'dayjs'
import joi from 'joi'
import express from 'express'
import cors from 'cors'
import { Router } from 'express'
import transactionRouter from '../src/routes/transactionRouter.js'
import autoRouter from '../src/routes/autoRouter.js'


const app = express()
app.use(express.json())
app.use(cors())

app.use(autoRouter)
app.use(transactionRouter)


// validação usuario
 export const userSchema = joi.object({
    name: joi.string().required(),
    email:  joi.string().email() .required(),
    senha:  joi.string().min(3).required(),
})

// validaçao login
 export const loginSchema= joi.object({
    email:  joi.string().email() .required(),
    senha: joi.string().min(3).required()
})

//transação 
const transacao = joi.object({
    value: joi.number().required(), 
    descricao: joi.string().required(),
    type: joi.string().required().valid('income', 'expense')
})

// post cadastro
app.post('/cadastro', signUp )





const PORT = 5000
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`) )