module.exports = {
    development:{
            database:{
                host:'localhost',
                port:3386,
                name:'spoiler',
                dialect: 'mysql',
                user:'root',
                password:'123456'
        }
    },
    production:{
        database:{
            host: process.env.database.host,
            port:process.env.database.port        
        }
    }
};
