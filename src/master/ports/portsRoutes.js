const {Router, response} = require ("express")
const portRouter = Router ();
const {getPortDetailsById} = require ("./portscontroller");
portRouter.get("/:id", async (req, res) =>{
    try {
        const portId = parseInt(req.params.id);
        const {rows} = await getPortDetailsById({portId});
        const portDetails = rows[0];
        res.json({response:true, data: portDetails});
    }
    catch(error) {
        res.json({response:false});
    }
});
module.exports = portRouter;
