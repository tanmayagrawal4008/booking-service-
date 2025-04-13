const express = require('express');
const BodyParser  = require('body-parser');
const {PORT}  = require('./Config/server_config');


const app = express();

const apiRoutes = require('./Routes/index');
const db = require('./Models/index');


const StartServer = async () => {

    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({extended : true}));
    app.use('/api', apiRoutes);

    app.listen(PORT , async () => {
        console.log("server started on port : " , PORT );
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter : ture});

        }

    })
}


StartServer();





