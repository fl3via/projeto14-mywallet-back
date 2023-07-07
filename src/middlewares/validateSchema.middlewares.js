export function validateSchema(userSchema) {
    return (req, res, next) => {

        const validation = userSchema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map((detail) => detail.message)
            return res.status(422).send(errors)
        }

        next()
    }
}