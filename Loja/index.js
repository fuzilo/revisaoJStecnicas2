const express = require("express") //importa o express
const app = express() //iniciando o express


// definindo EJS como renderizador de página
app.set("view engine", "ejs")



app.get("/", function(req, res){
    res.render("index")
})
app.get("/clientes", function(req, res){
    const clientes =[
        {nome:"Eduardo Arantes", cpf:"090.080.010-21", endereço:"Rua B, 10"},
        {nome:"Eduardo Arantes", cpf:"090.080.010-21", endereço:"Rua B, 10"},
        {nome:"Eduardo Arantes", cpf:"090.080.010-21", endereço:"Rua B, 10"},
        {nome:"Eduardo Arantes", cpf:"090.080.010-21", endereço:"Rua B, 10"}
    ]
    res.render("clientes", {
        clientes:clientes
    })

})
app.get("/produtos", function(req, res){
    const produtos=[
        {produto:"Algemas", descrição:"Segurança Total", preço:"15,00"},
        {produto:"Lubrificante íntimo", descrição:"que esquenta", preço:"20,00"},
        {produto:"Sutiã invisível", descrição:"Tomara que caia", preço:"50,00"}
    ]
    res.render("produtos", {produtos:produtos})
})
app.get("/pedidos", function(req, res){
    const pedidos=[
        {cliente: "Luan", produto:"Lubrificante íntimo", quantidade:"1", total:"20,00"},
        {cliente: "Ricardo", produto:"Algema", quantidade:"1", total:"15,00"},
        {cliente: "Valmir", produto:"Sutiã Invisível", quantidade:"1", total:"50,00"}
    ]
    res.render("pedidos", {pedidos:pedidos})
})

app.listen(8080, function(erro){
    if (erro){
        console.log("Ocorreu um erro")
    }else{
        console.log("Servidor Iniciado com Sucesso")
    }
})

