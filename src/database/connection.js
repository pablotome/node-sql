import sql from 'mssql'     //https://www.npmjs.com/package/mssql
import config from '../config'

const dbSettings = {
    user : config.dbUser, 
    password : config.dbPassword, 
    server : config.dbServer, 
    database : config.dbDatabase, 
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, 
        trustServerCertificate: true, 
    }
}

export async function getConnection() {
    /*const pool = await sql.connect(dbSettings);
    const result = await pool.request().query('select getdate()');
    console.log(result);*/
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    }
    catch (error)
    {
        console.log(error);
    }
}

//getConnection();

export { sql }