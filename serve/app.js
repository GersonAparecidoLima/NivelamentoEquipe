const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req, res) =>{
res.send('ola pessoa');
});


app.get('/login',(req, res) =>{
res.send('pagina de login');
} ) ;

app.get('/venda',(req, res) =>{
    res.send('pagina de venda');
    } ) ;

app.get('/lista',(req, res) =>{
    res.send('pagina de lista');
    } ) ;    
    app.get('/carrinho-de-compra',(req, res) =>{
        res.send('pagina de carrinho de compra');
        } ) ;    


app.listen(port,()=>{
console.log('no ar');
})