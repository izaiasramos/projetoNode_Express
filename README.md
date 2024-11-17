# projetoNode_Express
um projeto Nodejs com Express configurando servidor e rotas da aplicação.
o Express é um framework para Node.js que fornece recursos para construir aplicações web e APIs.

- O Express é um framework orientado a Rotas, que permite criar rotas para diferentes URLs e métodos HTTP (GET, POST, PUT, DELETE, etc.).

isso quer dizer que tudo será feito atravéz de rotas

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