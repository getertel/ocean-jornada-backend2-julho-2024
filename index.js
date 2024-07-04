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
  res.send('Item criado com sucesso!')
})

// Read By Id - [GET] /item/:id
app.get('/item/:id', function (req, res) {
  // Acessamos o parâmetro de rota ID
  const id = req.params.id

  // Acessamos o item na lista pelo índice corrigido (id - 1)
  const item = lista[id - 1]

  // Enviamos o item obtido como resposta
  res.send(item)
})
 
// Update - [PUT] /item/:id
app.put('/item/:id', function (req, res) {
  // Acessamos o ID do parâmetro de rota
  const id = req.params.id

  // Acessamos o novoItem no body da requisição
  const novoItem = req.body.nome

  // Atualizamos a lista com a nova informação
  lista[id - 1] = novoItem

  // Enviamos uma mensagem de sucesso
  res.send(id)
})


app.listen(3000)