async function validateToken(token) {

    let user

    if (!token) {
        return res.sendStatus(401);
    }

    try {
        user = jwt.verify(token, process.env.JWT_SECRET);
      } catch {
        throw new error;
      }

}

async function validateData(value, type){
    if (!value || !type) {
        throw new error
    }

    if (value < 0) {
        throw new error
      }
}

export {
    validateToken,
    validateData
}