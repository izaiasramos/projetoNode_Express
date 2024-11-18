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

req E res: 

req = request - é um objeto que contém informações sobre a requisição HTTP feita pelo cliente.
                dentro desse objeto tenho atributos com funções que eu posso usar para acessar informações da requisição.
                um desses atributos é o query que uso para acessar informações da requisição via url encontrada apos o ?.
                Ex let cliente = req.query.nome - vai pegar o valor do nome da url e inserir em cliente.

res = response - é um objeto que contém informações sobre a resposta HTTP que será enviada de volta ao cliente.
                dentro desse objeto tenho atributos com funções que eu posso usar para acessar informações da resposta.
                - Um desses atributos é o send que uso para enviar uma resposta para o cliente.
                    Ex: res.send("Bem-vindo ao meu app!");
                - Um outro atributo é o sendFile que uso para enviar um arquivo para o cliente.
                    Ex: res.sendFile(__dirname + "/index.html");
                - Um outro atributo é o redirect que uso para redirecionar o cliente para outra rota.
                    Ex: res.redirect("/sobre");
                - Um outro atributo é o json que uso para enviar um objeto json para o cliente.
                    Ex: res.json({nome: "Victor", idade: 25});
                - Um outro atributo é o status que uso para definir o status da resposta.
                    Ex: res.status(404).send("Página não encontrada!");
                - Um outro atributo é o type que uso para definir o tipo de conteúdo da resposta.
                    Ex: res.type("text/html");
                - Um outro atributo é o params que iso para acessar parametros que foram enviado via url
                    Ex: 
                    app.get("/ola/:nome/:cargo", function(req, res){
                        res.send("<h1> Olá " + req.params.nome + "</h1>" + "<br/> <h2>Seu cargo é: " + req.params.cargo + "</h2>" + "<br/> <h2> Seja bem vindo ao meu servidor</h2>"
                        + "<br/> <h3>Esse é um exemplo de rota dinamica</h3>"
                        );
                    });

Este projeto é baseado em uma serie de videos do canal do youtube: Victor Lima em: Curso de Node.js 

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

Video 9: Nodemon #09 - O Nodemon automatiza o processo de atualizar o servidor a cada alteração no codigo, atualmente tenho que fazer manualmente parando o servidor, e reativando com comando no terminal node index.js

PARA INSTALAR O NODEMOM: NPM INSTALL NODEMOM -G

é só inserir esse comando no terminal/cmd: npm install nodemon -g

a flag -g indica que é para instalar globalmente, ou seja, na maquina, assim ficará disponivel para qualquer projeto que precisar.