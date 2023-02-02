var http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end("Bem vindo ao site! <br><h1>Legal Programador</h1>");
}).listen(3000);
console.log('server run');