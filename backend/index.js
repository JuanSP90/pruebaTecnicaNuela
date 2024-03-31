const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });
const express = require('express')
const app = express()
var cors = require('cors')
app.use(express.json())
app.use(cors())

async function main() {
    return await mongoose.connect(process.env.CONNECTIONDB)
}

main()
    .then(() => console.log('Estamos conectados a MongoDB'))
    .catch(err => console.log(err))

app.listen(process.env.PORT, () => {
    console.log(`Backend prueba tecnica Nuela funcionando`)
});