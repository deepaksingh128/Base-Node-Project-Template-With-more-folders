const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');

const { SuccessResponse, ErrorResponse} = require('../utils/common');

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED) 
                .json(SuccessResponse);

    } catch(error) {
        // console.log(error); // for debugging purpose
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

module.exports = {
    createAirplane
}