class AppError extends Error {
    constructor(
        name  = ,
        massage  = ,
        explanation  = ,
        statusCode = 

    ){
        super();
        this.name = name;
        this.massage  = massage ;
        this.explanation  = explanation ;
        this.statusCode = statusCode;

    }
}

module.exports =  AppError;
