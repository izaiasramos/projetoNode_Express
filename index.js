const express = require('express');//modulo express. importa o express, que é um framework para criação de aplicações web

const app = express();//cria uma copia do framework express para dentro da constante app, isso quer dizer que qualquer coisa que eu fizer será atravez do app.

//REQ = requisição, é um objeto que uso para receber uma requisição, posso receber um arquivo html, um json, um arquivo de imagem, um arquivo de audio, um arquivo de video, um arquivo de texto, um arquivo de pdf, um arquivo de zip.
//RES = resposta, é um objeto que uso para enviar uma resposta, posso enviar um arquivo html, um json, um arquivo de imagem, um arquivo de audio, um arquivo de video, um arquivo de texto, um arquivo de pdf, um arquivo de zip.
//SEND = enviar, é um objeto que uso para enviar uma resposta, CADA ROTA/FUNÇÃO SÓ PODE TER 1 SEND,posso enviar um arquivo html, um json, um arquivo de imagem, um arquivo de audio, um arquivo de video, um arquivo de texto, um arquivo de pdf, um arquivo de zip.
//PARAMS = usado para acessar algum parametro da requisição, Ex req..params.nome 

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
//req é responsavel por receber dados de uma requisição, e podemos pegar esses dados acessando req.params.oque quero pegar da requisição.
//ex atraves do req.params.nome ele vai pegar o nome que o usuario digitou
//params - é usado para acessar parametros da requisição,um ex é req.params.nome, que vai pegar o nome salvo nna requisição, usado para pegar os parametros da url, por exemplo: /ola/:nome, o nome é um parametro, e podemos pegar esse parametro usando req.params.nome
//criamos uma rota para fins de exemplo de uma rota dinamica, ao acessar via url a pagina ola/ e colocar o nome ao direcionar para a pagina aparecerá ola e o nome digitado
app.get("/ola/:nome/:cargo", function(req, res){
   res.send("<h1> Olá " + req.params.nome + "</h1>" + "<br/> <h2>Seu cargo é: " + req.params.cargo + "</h2>" + "<br/> <h2> Seja bem vindo ao meu servidor</h2>"
    + "<br/> <h3>Esse é um exemplo de rota dinamica</h3>"
   );
});

//criar um servidor com o express,app. acessa a função do express listen() que fica escutando a porta configurada listen(8081)
app.listen(8081, function(){//a função de callback app.listen diz ao nodejs, o servidor está rodado nesse endereço url, ai o nodejs la e roda a função callback, que é a função que vai ser executada quando o servidor estiver rodando.
    console.log("Server is runninng on url http://localhost:8081");
})//tem que estar na ultima linha do meu codigo.
//PARA ATIVAR  O SERVIDOR, NO TERMINAL DIGITAR: node index.js DEPOIS SO ACESSAR VIA URL: http://localhost:8081