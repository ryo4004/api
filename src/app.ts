import express, { RequestHandler } from 'express'

const app = express()

app.use(express.json() as RequestHandler)
app.use(express.urlencoded({ extended: true }) as RequestHandler)

// CORSを許可する
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// ルートアクセス
app.get('/', (req, res) => {
  console.log('root access')
  res.redirect(301, 'https://winds-n.com')
})

app.listen(process.env.PORT || 3000)
