class BaseController {
    constructor(servClass){
        this.serv = new servClass();
    }
    // DB Operations
    getAll = async (req, res) => {
        try {
            const response = await this.serv.findAll();
            return res.json(response);
        } catch (error) {
            res.status(400).json({
                error: error
            })
        }
    }
    get = async (req, res) => {
        try {
            const id = req.params.id;
            const find = await this.serv.findById(id);
            if(!find){
                res.status(404).json({ msg: "Not found" });
                return;
            }
            return res.json(find);
        } catch (error) {
            res.status(400).json({
                error: error
            })
        }
    }
    create = async (req, res) => {
        try {
            const body = req.body;
            console.log(body);
            await this.serv.create(body);
            res.status(201).json({ body, msg: 'Created' });
        } catch (error) {
            res.status(400).json({
                error: error
            })
        }
    }
    update = async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const updated = await this.serv.update(id, body);
            if(!updated){
                res.status(404).json({ msg: "Not found" });
                return;
            }
            res.status(200).json({ updated, body, msg: "Success!" });
        } catch (error) {
            res.status(400).json({
                error: error
            })
        }
    }
    delete = async (req, res) => {
        try {
            const id = req.params.id;
            const deleted = await this.serv.delete(id);
            if(!deleted){
                res.status(404).json({ msg: "Not found" });
                return;
            }
            res.status(200).json({ deleted, msg: "Deleted"});
        } catch (error) {
            res.status(400).json({
                error: error
            })
        }
    }
}

module.exports = BaseController;