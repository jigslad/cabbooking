const cabs = require('../entity/cabList.json')

module.exports = {
    bookCab: async (req,res,next) => {
        let {x1,x2,threshold} = req.body
        let availableCabs = [];
        let cabId;
        for (const cabKey in cabs) {
            if(!cabs[cabKey].driverRide) {
                let distance = Math.sqrt(((x2 - x1) * 2) + ((cabs[cabKey].y2 - cabs[cabKey].y1) * 2))
                if (distance <= threshold) {
                    availableCabs.push({"distance": distance, "cabKey": cabKey})
                }
            }
        }
        if(!availableCabs){
            return res.status(400).send({code:2,message:"cab is not available"})
        }
        if(availableCabs.length === 1){
            cabId = availableCabs[0].cabKey;
        }
        else {
            availableCabs.sort(function(a, b) {
                let keyA = new Date(a.distance),
                    keyB = new Date(b.distance);
                // Compare the 2 dates
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });
            cabId = availableCabs[0].cabKey;
        }
        cabs[cabId].driverRide = 1;
        return res.status(200).send({code:1,message:"assign cab to rider successfully","cabId":cabId})
    },
    endBooking: async (req,res,next) => {
        let {cabId,y1,y2} = req.body
        if(!cabs[cabId].driverRide){
            return res.status(400).send({code:1,message:"cab has no active ride"})
        }
        cabs[cabId].y1 = y1
        cabs[cabId].y2 = y2
        cabs[cabId].driverRide = 0
        return res.status(200).send({code:1,message:"Ride is Ended Successfully"})
    },
}