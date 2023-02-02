const express = require("express"); //importando o express
const app = express(); //iniciando

app.get("/",function(req, res){
    res.send("Bem ao guia do programador");
});

app.get("/blog/:artigo?",function(req, res){
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h2> Artigo: " + artigo + "<h2>");
    }else{
        res.send("<h2>Bem vindo ao meu blog</h2>");
    }

});

app.get("/canal/youtube",function(req, res){

    var canal = req.query["canal"];

    if(canal){
        res.send(canal);
    }


    res.send("<h1>Bem vindo ao meu canal show massa</h1>");
});

app.get("/ola/:nome/:empresa",function(req, res){
    var nome = req.params.nome;
    var empresa = req.params.empresa;

    res.send("<h1> oi " + nome + " do " + empresa +  "</h1>");
});


app.listen(4000,function(erro){
    if(erro){
        console.log('Ocorreu um erro!');
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})