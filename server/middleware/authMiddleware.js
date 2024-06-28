const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send('Acceso denegado. No se proporcionó un token.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        if(!decoded){
            return res.status(400).send('Usuario no encontrado.');
        }
        next();
    } catch (error) {
        res.status(400).send('Token inválido.');
    }
};

module.exports = authMiddleware;
