const express = require('express')
const app = express()
const path = require('path')

const PORT = 4000

app.use(express.static(path.join(__dirname, '../Eleva')))

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(PORT, () => {
    console.log('Server on port ', PORT)
})