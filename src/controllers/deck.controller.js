const DeckService = require('../services/deck.service');
const Controller = require('./_base.controller');

class DeckController extends Controller{
    constructor(){
        super(DeckService);
    }

    getReview = async (req, res) => {
        try {
            const deck = await this.serv.findById(req.params.id);
            const cards = deck.cards.filter((element) => Date.parse(element.nextReview) < Date.now());
            res.status(200).json({cards});
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error
            })
        }
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