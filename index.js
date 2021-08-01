const fs = require('fs');

fs.readFile('./nome.txt', {encoding: 'utf-8'} ,(error, dados) => {
    if(error) {
        console.error(error);
    } else{
        console.log(dados)
    }
})

fs.writeFile('./nome.txt', "{encoding: 'utf'}", error => {
    if(error) console.error(error);
})

fs.readFile('./usuario.json', {encoding: 'utf-8'} ,(error, dados) => {
    if(error) {
        console.error(error);
    } else{
        var conteudo = JSON.parse(dados)
        console.log(conteudo)
    }
})