const express = require('express');//modulo express. importa o express, que é um framework para criação de aplicações web

const app = express();//cria uma copia do framework express para dentro da constante app, isso quer dizer que qualquer coisa que eu fizer será atravez do app.

//criar uma rota, é o caminho da nossa aplicação, uma rota é um endereço que vai ser acessado pelo navegador
app.get("/", function (req, res){
    res.send("Hello World");
});




//criar um servidor com o express,app. acessa a função do express listen() que fica escutando a porta configurada listen(8081)
app.listen(8081, function(){
    console.log("Server is runninng on url http://localhost:8081");
})//tem que estar na ultima linha do meu codigo.
//PARA ATIVAR  O SERVIDOR, NO TERMINAL DIGITAR: node index.js DEPOIS SO ACESSAR VIA URL: http://localhost:8081