const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Desafio: criar endpoint /oi que exibe "Olá, mundo!"
app.get('/oi', function (req, res) {
  res.send('Olá, mundo!')
})

//endpoint experiência minha

app.get('/bug', function (req, res) {
  res.send('Bugado')
})

 //Lista de personagens
 const lista = ['Rich Sanches', 'Morty Smith', 'Summer Smith']
 //read all - [get] / item
 app.get('/item', function (req, res) {res.send(lista)
})
//sinalizamos para o express que vamos usar Json no body 

app.use(express.json())

//creat - post
app.post('/item', function (req, res) {
  console.log(req.body)
  const item = req.body.nome
  lista.push(item)
  res.send('Create')
  })
app.listen(3000)