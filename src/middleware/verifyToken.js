import jwt from "jsonwebtoken";



const verifyToken = (req, res, next) => {
    let { token } = req.headers;
    jwt.verify(token, 'iti', async (err, decoded) => {
        if (err) return res.status(401).json({ message: "Error", err })


        req.user = decoded;
        next()
    })
}

export default verifyToken;