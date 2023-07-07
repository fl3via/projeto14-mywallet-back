import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'

dotenv.config()

//conexão com mongo
const mongoClient = new MongoClient('process.env.DATABASE_URL')
try {
    await mongoClient.connect()
    console.log('Mongodb conectado!')
} catch (err) {
    console.log(err.message)
}

export const db = mongoClient.db()