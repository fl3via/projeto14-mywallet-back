import { db } from "../database/conexaoMongo.js"
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'

export async function signUp(req, res) {
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

export async function login(req, res) {
    const { email, senha } = req.body

    try {
        const user = await db.collection('userExist').findOne({ email })
        if (!user) return res.status(401).send('E-mail não cadastrado')

        const senhaOk = bcrypt.compareSync(senha, user.senha)
        if (!senhaOk)
            return res.status(401).send({ error: 'Senha incorreta' })

        const token = uuid()
        await db.collection('sessions').insertOne({ token, userId: user._id })
        res.send({ token, userName: user.name })


    }
    catch (err) {
        res.status(500).send(err.message)
    }

}

export async function logout(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
  
    try {
      if (!token) {
        return res.sendStatus(401);
      }
  
      const session = await db.collection('sessions').findOneAndDelete({ token });
  
      if (!session.value) {
        return res.sendStatus(401);
      }
  
      res.sendStatus(200);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }