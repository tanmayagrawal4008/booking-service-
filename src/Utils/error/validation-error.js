const {StatusCodes}  = require('http-status-codes');

class ValidationError extends Error {
    constructor(error){

        let explanation  = [];
        error.errors.array.forEach(element => {
            explanation.push(element.message);
        });
        
        this.massage  = massage;
        this.explanation  = explanation;
        this.statusCode = statusCode;
    }
}


module.exports = ValidationError;


