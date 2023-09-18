const DeckRepository = require('../services/deck.service');
const BaseController = require('./_base.controller');

class DeckController extends BaseController{
    constructor(){
        super(DeckRepository);
    }

    getAllCards = async (req, res) => {
        try {
            const id = req.params.id;
            const response = await this.repo.getAllCards(id);
            return res.json(response);
        } catch (error) {
            res.status(400).json({
                error: error.message
            })
        }
    }


}

module.exports = DeckController;