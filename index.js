const express = require('express');
const app = express()

const PORT = 8000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gyulo94:q1w2e3@boilerplate.guzruec.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('안녕하세요')
})

app.listen(PORT, () => {
    console.log(`서버 가동 중, ${PORT}`);
})