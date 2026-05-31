const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function connectToDB() {
    try {
        const client = await pool.connect();
        console.log("Database Connected Successfully...");
        client.release();
    } catch (err) {
        console.log(`Database Connection Failed: ${err}`);
    }
}

module.exports = connectToDB ;