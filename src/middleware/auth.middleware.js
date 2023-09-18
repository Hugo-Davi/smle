const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            let user = jwt.verify
        } else {
            res.status(401).json({ message: 'Unauthorized User' });
        }
    } catch (error) {
        res.status(401).json({
            error: error
        })
    }
}