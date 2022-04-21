module.exports = {
    validateBookingData: async (req,res,next) => {
        if(!req.body){
            return res.status(400).send({code:400,message:"body data required"})
        }
        if(!req.body.x1 || !req.body.x2){
            return res.status(400).send({code:400,message:"invalid body data"})
        }
        if(!req.body.threshold){
            return res.status(400).send({code:400,message:"threshold data required"})
        }
        if(!req.body.driverAvailability){
            return res.status(400).send({code:400,message:"driver is not Available"})
        }
        next();
    },
    validateEndBookData: async (req,res,next) => {
        if(!req.body){
            return res.status(400).send({code:400,message:"body data required"})
        }
        if(!req.body.y1 || !req.body.y2){
            return res.status(400).send({code:400,message:"invalid body data"})
        }
        if(!req.body.cabId){
            return res.status(400).send({code:400,message:"cabId is required"})
        }
        next();
    }
}