const DeckService = require('../services/deck.service');
const BaseController = require('./_base.controller');

class DeckController extends BaseController{
    constructor(){
        super(DeckService);
    }

    create = async (req, res) => {
        try {
            const body = req.body;
            body.owner = req.userId;
            await this.serv.create(body);
            res.status(201).json({ body, msg: 'Created' });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error
            })
        }
    }


    addCard = async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            await this.serv.addCard(id, body);
            res.status(200).json({ body });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error: error
            })
        }
    }

}

module.exports = DeckController;