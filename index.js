const express = require('express');
const app = express()
const PORT = 8000
const { User } = require('./models/User')
const { mongo_URI } = require('./config/dev')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const mongoose = require('mongoose')
mongoose.connect(mongo_URI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('안녕하세요')
})

app.post('/signup', (req, res) => {
    // 회원가입할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    
    const user = new User(req.body)
    
    const result = user.save().then(() => {
        res.status(200).json({
            succeess: true
        })
    }).catch((err) => {
        res.json({ success: false, err })
    })
})

app.listen(PORT, () => {
    console.log(`서버 가동 중, ${PORT}`);
})