

var clientes = [
    {
        id: 1,
        name: "Eliabe",
        sobreNome: "Rodrigues",
        cep: "13308-123",
        endereco: "Rua Pedrugulho",
        numeroResidencia: "72",
        bairro: "Cidade Nova",
        cidade: "Itu",
        estado: "SP"
    },
    {
        id: 2,
        name: "laís",
        sobreNome: "Ribeiro",
        cep: "18105-279",
        endereco: "Rua Tarcízio Carlos Leite",
        numeroResidencia: "142",
        bairro: "jardim Eliana",
        cidade: "Sorocaba",
        estado: "SP"
    },
    {
        id: 3,
        name: "Izabelly",
        sobreNome: "Rodrigues",
        cep: "13308-075",
        endereco: "Rua Campinas",
        numeroResidencia: "157",
        bairro: "Cidade Nova",
        cidade: "Itu",
        estado: "SP"
    }
]

loadClientes();

function loadClientes(){
    for (let cli of clientes) {
       addNewRow(cli);         
    }
}

function addNewRow(cli){
    console.log("Iae")

    var table = document.getElementById("tabelaClientes")
    var newRow = table.insertRow();

    var idNode = document.createTextNode(cli.id)
    newRow.insertCell().appendChild(idNode)

    var nameNode = document.createTextNode(cli.name + " " + cli.sobreNome )
    newRow.insertCell().appendChild(nameNode)

    var enderecoNode = document.createTextNode(cli.endereco + ", " + cli.numeroResidencia)
    newRow.insertCell().appendChild(enderecoNode)

    var cepNode =document.createTextNode(cli.cep)
    newRow.insertCell().appendChild(cepNode)

    bairroNode = document.createTextNode(cli.bairro)
    newRow.insertCell().appendChild(bairroNode)

    cidadeNode = document.createTextNode(cli.cidade)
    newRow.insertCell().appendChild(cidadeNode)

    estadoNode = document.createTextNode(cli.estado)
    newRow.insertCell().appendChild(estadoNode)

}





