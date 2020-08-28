const express = require("express");
const app = express();

//comando para criação de rotas - importante para aplicação
app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app");
}); 

//comando para criação de rotas dinâmicas com paramêtros
app.get('/ola/:cargo/:nome', function(req, res){
    res.send(req.params);
});

app.listen(8081, function(){
    console.log("Servidor rodando");
});