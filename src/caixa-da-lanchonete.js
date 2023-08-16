class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let pagamento=0;
        let carrinho;
        let carrinhoPagamento=[];
        if(itens.length==0){
                return 'Não há itens no carrinho de compra!'
        }
        else{
            for (let i = 0; i < itens.length; i++) {
                let objeto=(itens[i].split(','));
                let cod=obter_elemento(objeto[0])
                if (cod==null){
                    return 'Item inválido!'
                }
                if(objeto[1]==0){
                    return 'Quantidade inválida!'
                }
                if(objeto[0]=='chantily' ||objeto[0]=='queijo'){
                    if (verificar_opcional(carrinhoPagamento,cod)){
                    }
                    else{
                        return "Item extra não pode ser pedido sem o principal";
                    }
                    }
                carrinhoPagamento.push(cod)
                pagamento+=cod.valor*objeto[1];

        }
    }
        if (metodoDePagamento=='dinheiro'){
            return ("R$ "+((Math.round((pagamento*0.95) * 100) / 100).toString()).replace('.',','))
            
        }
        else if(metodoDePagamento=='debito'){
            return ("R$ "+(pagamento.toFixed(2)).toString()).replace('.',',')
        }
        else if(metodoDePagamento=='credito'){
            return ("R$ "+(((pagamento)*1.03).toFixed(2).toString()).replace('.',','))
        }
        else if(metodoDePagamento!='dinheiro'&&metodoDePagamento!='debito' &&metodoDePagamento!='credito'){
            return "Forma de pagamento inválida!"
        }
        
        return carrinho;
    }

}
var menu=[
    {codigo:'cafe',
    descrição:'Café',
    valor:3.00},
    {codigo:'chantily',
    descrição:'Chantily (extra do Café)',
    valor:1.50,
    requisito:'cafe'},
    {codigo:'suco',
    descrição:'Suco Natural',
    valor:6.20},
    {codigo:'sanduiche',
    descrição:'Sanduíche',
    valor:6.50},
    {codigo:'queijo',
    descrição:'Queijo (extra do Sanduíche)',
    valor:2.00,
    requisito:'sanduiche'},
    {codigo:'salgado',
    descrição:'Salgado',
    valor:7.25},
    {codigo:'combo1',
    descrição:'1 Suco e 1 Sanduíche',
    valor:9.50},
    {codigo:'combo2',
    descrição:'1 Café e 1 Sanduíche',
    valor:7.50}
]
function obter_elemento(codigo){
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].codigo === codigo) {
            return menu[i];
        }
    }
    return null;
}
function verificar_opcional(carrinho, opcional){
    for (var i = 0; i < carrinho.length; i++) {
        if (carrinho[i].codigo === opcional.requisito) {
            return true;
        }
    }
    return false;
}
export { CaixaDaLanchonete };

