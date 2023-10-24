const mysql = require('mysql');

export const dbConnection = async() => {
    try {
        const connection = mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD
          });
        await connection.connect();
        console.log('DB CONNECTION ESTABLISHED');
    } catch (error) {
        console.log(error);
        throw new Error('ERROR WHILE TRYING TO CONNECT TO THE DB');
    }
}