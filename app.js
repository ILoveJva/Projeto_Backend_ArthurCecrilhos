const express = require('express');
const app = express();
const port = 3001;
app.get('/',(req, res) => {
  res.send("Seja bem vindo!");
})
app.get('/introducao', (req,res) => {
  res.send('<h2>Introdução ao Express</h2>');
});
app.post('/filmes', (req,res) =>{
  //const titulo = req.body.titulo;
  //const genero = req.body.genero;
  const {titulo, genero} = req.body;
  res.send(`Filmes:${titulo} - Gênero ${genero}, recebido...`);
});
const log = (req, res, next) => {
  console.log(`.......................Acessado em ${new Date()}`);
  next();
}
app.get('/transfere', log, (req, res) => {
  res.send("Ok! Valor tranferido com sucesso...");
})
app.listen(port, ()=>{
  console.log(`Servidor Rodando em http://localhost:${port}`);
});
