async function signInService(email, password) {

    const { rows } = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );
    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new error
    }
}

async function signUpService(name, email, password ){
    if (!name || !email || !password) {
        return res.sendStatus(422);
    }

    const existingUsers = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );

    if (existingUsers.rowCount > 0) {
        throw new error
    }
}

export {
    signInService,
    signUpService
}