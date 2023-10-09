const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')))

app.get('/api/ping', (req, res) => {
  res.json(true)
})


app.listen(PORT, () => console.log(`Server listening @ http://localhost:${PORT}`))