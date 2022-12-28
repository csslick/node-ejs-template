const express = require('express');
const app = express();
const ejs = require('ejs');

// ejs를 view 엔진으로 설정
app.set('view engine', 'ejs');

// 정적파일 경로 지정
app.use(express.static("public"));

// post 전송시 필요한 모듈(미들웨어)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// home
app.get('/', function(요청, 응답){
  응답.render('pages/index.ejs')
})

// about
app.get('/about', function(req, res) {
  res.render('pages/about.ejs')
})




const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`)
})
