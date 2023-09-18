const AuthService = require('../services/auth.service');
const BaseController = require("./_base.controller");

const bcrypt = require('bcrypt');

class AuthController extends BaseController{
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

            await bcrypt.compare(body.password, user.password, (error, response) => {
                if(error){
                    return res.status(400).json({error: error})
                }
                if(response){
                    console.log('Login sucesso');
                    return res.status(201).json({message: 'Logged', user: user});
                }
                else{
                    return res.json({success: false, message: 'passwords do not match'});
                }
            })
        } catch (error) {
            res.status(400).json({
                error: error.message
            })
        }
    }
}

module.exports = AuthController;