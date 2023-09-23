const AuthService = require('../services/auth.service');
const Controller = require("./_base.controller");

const bcrypt = require('bcrypt');

class AuthController extends Controller{
    constructor(){
        super(AuthService);
    }

    register = async (req, res) => {
        try {
            const body = {
                    username: req.body.username,
                    password: await bcrypt.hash(req.body.password, 10)
                };
            await this.serv.create(body);
            res.status(201).json({ body, msg: 'Created' });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error: error.message
            })
        }
    }

    login = async(req, res) => {
        try {
            const body = req.body; // Body da requisição

            const username = req.body.username;
            const user = await this.serv.findByUsername(username);

            const passwordIsValid = await bcrypt.compare(body.password, user.password);

            if(!passwordIsValid){
                return res.json({success: false, message: 'passwords do not match'});
            }

            // JWT
            const token = this.serv.generateToken(user.id);

            res.status(201).send({token});

        } catch (error) {
            console.log(error);
            res.status(400).json({
                error: error.message
            })
        }
    }
}

module.exports = AuthController;