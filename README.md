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

Este projeto é baseado em umma serie de videos do canal do youtube: Victor Lima em: Curso de Node.js 

video 7: Rotas #07   - ensina a criar rotas no Express e criar um servidor para acessar o projeto via url a web.
Url: https://www.youtube.com/watch?v=UMI7kFwmAHo&t=187s


Video 8: Parâmetros #08 - parâmetros são uma forma de uma deixar as rotas dinâmicas.
url: https://www.youtube.com/watch?v=G9b-Zi0rg3o

Para fins de exemplo criamos uma rota chamada ola e outra cargo, e a função dessas rotas é exibir o nome e o cargo de alguma pessoa: ola fulano programador.

para criar os parametros colocamos na rota :parametro
ex: app.get("/ola/:nome/:cargo", function(req, res){
 e aqui  dentro da função callback, pegamos os parametros da rota e exibimos na tela: 
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>Seu cargo é: " + req.params.cargo + "</h2>");
})
na url digitamos o valoor dos parametros, ex: http://localhost:8081/ola/joao/programador

Video 9: Query Params #09 - Query Params são parametros que são passados na url, e são opcionais, ou seja, não são obrigatórios.