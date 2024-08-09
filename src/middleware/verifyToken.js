import jwt from "jsonwebtoken";



const verifyToken = (req, res, next) => {

    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).send({ error: 'No token provided' });

    const token = authHeader.replace('Bearer ', '').replace(/"/g, '');
    jwt.verify(token, 'iti', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token', err });

        req.user = decoded;
        next();
    });
}

export default verifyToken;