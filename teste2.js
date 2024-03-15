//16/02/2024

const urlBase ='http://www.sianet ';
const metodo = '/sianet/ ';

//console.log(`olha aqui ${urlBase}: ${metodo}`);
const url =`
estou 
acompanhado
aqui
`;

//objeto

const carro = {
   ano:'2024 ',
   modelo:'Golf ',
   fabrica: 'Vw ' 
}
//console.log(carro.modelo);

//Notação literal

const ano = `2008`;
const modelo = `corsa`;
const fabricacao = `GM`;
const porta = `4`;

const carrovelho = {
    ano,
    modelo,
    fabricacao,
    porta,
    Descricao : function(){        
       // Descricao : () => {        
        //return ' ar condicionado'
        return `${this.modelo} Ano do carro ${this.ano}`
    }
}
//acresentando propriedade, atribuição direta
carrovelho.combustivel="gasolina";

//console.log("meu carro : "+carrovelho.modelo + "com " +carrovelho.porta+" portas movido a : "+carrovelho.combustivel +" usando uma função : " +carrovelho.Descricao());


//Interação com elementos do objeto

for(let key in carrovelho){
    console.log(carrovelho[key]);
}


