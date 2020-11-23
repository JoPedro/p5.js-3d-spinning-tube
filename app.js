const express = require('express')
const app = express()

app.listen(3000)

app.use(express.static('public'))
console.log('Gaming on 3000')