const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const authController = {
    register: async (req, res) => {
        try {
            const { nombre, email, password } = req.body;
            const usuario = new Usuario({ nombre, email, password });
            await usuario.save();
            res.status(201).send('Usuario registrado con éxito');
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            console.log(req.body)
            const usuario = await Usuario.findOne({ email });
            if (!usuario || !(await usuario.comparePassword(password))) {
                return res.status(401).send('Credenciales inválidas');
            }

            //Cambiar esto si se desea ampliar el tiempo que expira el token
            const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token });
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
};

module.exports = authController;
