const {StatusCodes} = require('http-status-codes');


class ServiceError extends Error {
    constructor(
        massage  = "Service layer error" , 
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
        explanation  = "something went wrong"

    ){
        this.name = "service error";
        this.massage  = massage;
        this.statusCode = statusCode;
        this.explanation  = explanation ;
    }
}


module.exports = ServiceError;
