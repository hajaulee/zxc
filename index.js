const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  
// var login = require("facebook-chat-api");
// var http = require('http'); 
// var answeredThreads = {};
// var fs = require("fs"); 
// process.env.TZ = 'Asia/Ho_Chi_Minh';
// var hang = 100004441292893
// var traicho = 1055126671237224
// var chungcho = 1055126671237224
// var hajauchatbot = 1872329979694561
// var trung = 100007333392629
// var hau = 100005675357730
// var tongthanhthu = 100007312037679
Create simple echo bot
// var tinnhan = 'ngu';
// var nguoinhan = hajauchatbot;
// function abc(){
    
    // var date = new Date();
    // login({email: "chau.mi.3701", password: "quenmatroi1"}, function callback (err, api) {
        // if(err) return console.error(err);
        // api.sendMessage("" + date.getHours() + ":" + date.getMinutes(), hau);
        // console.info("Xong");
// });
// }
// abc();
// setInterval(abc, 60000);  