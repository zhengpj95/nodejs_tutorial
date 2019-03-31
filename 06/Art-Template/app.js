
const express = require('express')
const path = require('path')
const app = express()
const port = 4000

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))

app.get('/', (req, res) => {
	res.render('layout.html', {
		title: '博客'
	})
})

app.get('/home', (req, res) => {
	res.render('home.html')
})


app.listen(port, () => {
	console.log("server running at http://localhost:4000")
})
