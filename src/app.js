import axios from 'axios'
import dayjs from 'dayjs'
import mongodb from 'mongodb'
import joi from 'joi'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


const app = express()
app.use(express.json())
app.use(cors)

const PORT = 5000
append.listen(PORT, () => console.log(`Rodando na porta ${PORT}`) )