//criar um servido padrão servido http
const http = require('http')
const port = 3000

//criando o servido
//utilizando aero functions
//createServer e um método do http já vem estanciado
const httpServer = http.createServer((req, res) =>{
//recebe um parametro um função com dois parametros
    res.statusCode = 200;
    res.setHeader('Content-Type','Text/plain');

    if(req.url =='/login' &&  req.method == 'GET') {
        return res.end('login page')
    }

    res.end('ola povo');
})
//subir o service
httpServer.listen(port,()=>{
console.log('Servido subi com sucesso')

})

//acessar no broser
//http://localhost:3000/
