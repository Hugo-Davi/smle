const DeckService = require('../services/deck.service');
const BaseController = require('./_base.controller');

class DeckController extends BaseController{
    constructor(){
        super(DeckService);
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