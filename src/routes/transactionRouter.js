 import { Router } from 'express'

const transactionRouter = Router()

transactionRouter.post('/transacao')
transactionRouter.get('transacao')

export default transactionRouter