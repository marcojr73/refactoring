import * as authServices from "../services/authServices.js"

export async function signin(req, res) {
    try {
        const {email, password} = req.body
        await authServices.signInService(email, password)        

        const token = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_SECRET
        );

        res.send({
            token,
        });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export async function signUp(req, res) {
    try {
        const { name, email, password } = req.body;

        await authServices.signUpService(name, email, password)

        const hashedPassword = bcrypt.hashSync(password, 12);

        await connection.query(
            `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
            [name, email, hashedPassword]
        );

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}