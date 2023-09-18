const UserRepository = require('../services/user.service');
const BaseController = require('./_base.controller');

const bcrypt = require('bcrypt')

class UserController extends BaseController{
    constructor(){
        super(UserRepository);
    }
    register = async (req, res) => {
        try {
            const body = {
                    username: req.body.username,
                    password: await bcrypt.hash(req.body.password, 10)
                };
            await this.repo.create(body);
            res.status(201).json({ body, msg: 'Created' });
        } catch (error) {
            res.status(400).json({
                error: error.message
            })
        }
    }
    login = async(req, res) => {
        try {
            const body = req.body;
            const user = await this.repo.findByUsername(body.username);
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

module.exports = UserController;