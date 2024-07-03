const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Desafio: criar endpoint /oi que exibe "Olá, mundo!"
app.get('/oi', function (req, res) {
  res.send('Olá, mundo!')
})
 //Lista de personagens
 const lista = ['Rich Sanches', 'Morty Smith', 'Summer Smith']
 //read all - [get] / item
 app.get('/item', function (req, res) {res.send(lista)
})
//sinalizar para o express 

app.use(express.json())

//creat - post
app.post('/item', function (req, res) {
  console.log(req.body)
  res.send('Create')
  })
app.listen(3000)