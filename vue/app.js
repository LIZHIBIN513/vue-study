const express = require('express')
const config = require('./config')
const request = require('request')
const qstring = require('querystring')

const app = express()

app.use(express.static(config.staticPath))

app.get('/movie/:category', (req, res, next) => {
  // 请求豆瓣API
  // 拿到数据，响应给你自己的请求
  // Request 请求到的数据就是一个可读流，可以通过 pipe 管道顺着 res 响应流发送数据
  request(`https://api.douban.com/v2/movie/${req.params.category}?${qstring.stringify(req.query)}`).pipe(res)
})

app.get('/movie/subject/:id', (req, res, next) => {
  request(`https://api.douban.com/v2/movie/subject/${req.params.id}`).pipe(res)
})

app.listen(config.port, err =>{
  
  console.log('server is running at port:'+config.port)
})
