const express = require("express")
const {Pool} = require("pg")

const pool = new Pool ({
    user: 'garrettross',
    host: 'localhost',
    database: 'test',
    password: '',
    port: 5432,
})
const app = express()
const PORT = process.env.PORT || 5001

app.use(express.static('public'))


// some route
app.get('/api/test', async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM message')
        const {rows} = response
        res.status(200).json(rows)
    } catch (error) {
        console.log('Server errro')
        res.status(500).json(error)
    } 
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})