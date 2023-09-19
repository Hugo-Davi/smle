const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const UserService = require('../services/user.service');
const userService = new UserService;

const authMiddleware = (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized User' });
        }

        token = token.split(" ")[1];
        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {

            if (error) {
                return res.status(401).json({ message: 'Token invalid' });
            }

            const user = await userService.findById(decoded.id);

            if (!user) {
                return res.status(401).json({ message: 'Token invalid' });
            }

            req.userId = user._id;
            console.log(req.body);

            next();
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            error
        })
    }
}

module.exports = authMiddleware;