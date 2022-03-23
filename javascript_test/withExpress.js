const http = require('http')
const express = require('express')
const { sendPosts } = require('./sendPosts')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'hello / endpoint' })
})

//app.post('/signup', handleSignUp) // 첫번째 인자에는 endpoint url 을 기입하고,
//app.post('/login', handleLogin) // 각각의 요청에 대해 핸들링 하는 함수를 두번째 인자로 넣습니다.
app.get('/products', sendPosts)

const server = http.createServer(app)

server.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})