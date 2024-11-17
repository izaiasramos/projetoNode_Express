const express = require('express');//modulo express. importa o express, que é um framework para criação de aplicações web

const app = express();//cria uma copia do framework express para dentro da constante app, isso quer dizer que qualquer coisa que eu fizer será atravez do app.

//REQ = requisição, é um objeto que uso para receber uma requisição, posso receber um arquivo html, um json, um arquivo de imagem, um arquivo de audio, um arquivo de video, um arquivo de texto, um arquivo de pdf, um arquivo de zip.
//RES = resposta, é um objeto que uso para enviar uma resposta, posso enviar um arquivo html, um json, um arquivo de imagem, um arquivo de audio, um arquivo de video, um arquivo de texto, um arquivo de pdf, um arquivo de zip.

//O Express é um framework orietado a Rotas, que permite criar rotas para diferentes URLs e métodos HTTP (GET, POST, PUT, DELETE, etc.).
//isso quer dizer que tudo será feito atravéz de rotas, que é um endereço que vai ser acessado pelo navegador


//criar uma rota, é o caminho da nossa aplicação, uma rota é um endereço que vai ser acessado pelo navegador
app.get("/", function (req, res){//pagina inicial, quando o usuario acessar o endereço "/"
    res.send("Seja bem vindo ao servidor. Pagina inicial do meu app!");
});

//criando mais uma rota, agora para adicionar/acessar uma pagina "sobre"
app.get("/sobre", function(req, res){//"/sobre" é o caminho da pagina
    res.send("Bem-vindo a pagina Sobre");
});

//criando mais uma rota, agora para adicionar/acessar uma pagina "blog"
app.get("/blog", function(req, res){
    res.send("Bem-vindo a pagina Blog");
});


//criar um servidor com o express,app. acessa a função do express listen() que fica escutando a porta configurada listen(8081)
app.listen(8081, function(){//a função app.listen diz ao nodejs, o servidor está rodado nesse endereço url, ai o nodejs la e roda a função callback, que é a função que vai ser executada quando o servidor estiver rodando.
    console.log("Server is runninng on url http://localhost:8081");
})//tem que estar na ultima linha do meu codigo.
//PARA ATIVAR  O SERVIDOR, NO TERMINAL DIGITAR: node index.js DEPOIS SO ACESSAR VIA URL: http://localhost:8081