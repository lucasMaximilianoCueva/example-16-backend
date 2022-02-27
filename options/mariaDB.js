const options = {
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "Desafio16_DB"
    },
    pool: { min: 0, max: 30, acquireTimeoutMillis: 60 * 1000 }
}

module.exports ={
    options
}