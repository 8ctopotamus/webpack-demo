const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html')))

app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`))