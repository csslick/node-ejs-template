const express = require('express');
const app = express();
const ejs = require('ejs');

// ejs를 view 엔진으로 설정
app.set('view engine', 'ejs');

// home
app.get('/', function(요청, 응답){
  응답.render('pages/index.ejs')
})




const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`)
})