import { db } from "../database/conexaoMongo.js"
import bcrypt from 'bcrypt'

async function signUp(req, res) {
    const { name, email, senha } = req.body

    try {
        const user = await db.collection('userExists').findOne({ email })

        if (userExists)
            return res.status(409).send({ mensagem: 'Já existe um usuário com este e-mail cadastrado.' })

        // Criptografar a senha
        const hash = bcrypt.hashSync(senha, 10)

        await db.collection('userExists').insertOne({ name, email, senha: hash })
    }

    catch (err) {
        res.status(500).send(err.message)
    }
}

export default signUp