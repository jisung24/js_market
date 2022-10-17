'use strict';
const express = require('express'); //express서버! 
const path = require('path');
const app = express(); 

app.use(express.static( './market/build' )); 
// 메인페이지 app객체에서 라우팅 작업해주기! 

// 리엑트로 만든 html get요청하기! 
// 리엑트로 만든 페이지를 생성하려면 build를 해줘야한다. 

// 라우팅은 리엑트도 할 수 있다. 
app.get('/index', async(req,res) => {
    res.sendFile(path.join(__dirname, 'market/build/index.html'));
    // res.sendFile(__dirname, './market/build/index.html');
})

app.get('*', async(req,res) => {
    res.sendFile(path.join(__dirname, 'market/build/index.html'));
    // res.sendFile(__dirname, './market/build/index.html');
})
app.listen(8080, async() => console.log(`8080PORT IS OPEN!`))
// REACT에서 3000번을 내부적으로 사용한다! 