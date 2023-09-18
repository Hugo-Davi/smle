const DeckService = require('../services/deck.service');
const BaseController = require('./_base.controller');

class DeckController extends BaseController{
    constructor(){
        super(DeckService);
    }

    getAllCards = async (req, res) => {
        try {
            const id = req.params.id;
            const response = await this.serv.getAllCards(id);
            return res.json(response);
        } catch (error) {
            res.status(400).json({
                error: error.message
            })
        }
    }


}

module.exports = DeckController;