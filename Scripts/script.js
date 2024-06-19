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
    estado: "SP",
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
    estado: "SP",
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
    estado: "SP",
  },
];

loadClientes();

function loadClientes() {
  for (let cli of clientes) {
    addNewRow(cli);
  }
}



function save() {

    var numero = document.getElementById("inputNumeroEndereco").value
    
    if(numero == ""){
        numero = "S/N"
    }


  cli = {
    id: clientes.length + 1,
    name: document.getElementById("inputName").value,
    sobreNome: document.getElementById("inputSobreNome").value,
    cep: document.getElementById("inputCep").value,
    endereco: document.getElementById("inputEndereco").value,
    numeroResidencia: numero,
    bairro: document.getElementById("inputBairro").value,
    cidade: document.getElementById("inputCidade").value,
    estado: document.getElementById("inputEstado").value,
  };

  addNewRow(cli);
  clientes.push(cli);
  console.log(cli.bairro);

  document.getElementById("formCliente").reset();
}



function addNewRow(cli) {
  var table = document.getElementById("tabelaClientes");
  var newRow = table.insertRow();

  var idNode = document.createTextNode(cli.id);
  newRow.insertCell().appendChild(idNode);

  var nameNode = document.createTextNode(cli.name + " " + cli.sobreNome);
  newRow.insertCell().appendChild(nameNode);

  var enderecoNode = document.createTextNode(cli.endereco + ", " + cli.numeroResidencia);
  newRow.insertCell().appendChild(enderecoNode);

  var cepNode = document.createTextNode(cli.cep);
  newRow.insertCell().appendChild(cepNode);

  bairroNode = document.createTextNode(cli.bairro);
  newRow.insertCell().appendChild(bairroNode);

  cidadeNode = document.createTextNode(cli.cidade);
  newRow.insertCell().appendChild(cidadeNode);

  estadoNode = document.createTextNode(cli.estado);
  newRow.insertCell().appendChild(estadoNode);
}

function consultarCep() {
  var cepDigitado = document.getElementById("inputCep").value;
  var url = `https://viacep.com.br/ws/${cepDigitado}/json/`;

  //console.log(url)

  $.getJSON(url, (response) => {
    if (response.erro == true) {
        apagarInputsErro()
        mensagenErro("CEP Inexistente");
    } else {
        $("#inputEndereco").val(response.logradouro);
        $("#inputBairro").val(response.bairro);
        $("#inputCidade").val(response.localidade);
        $("#inputEstado").val(response.uf);
        
        habilitarInput("#flexCheckSemNumero")
        mensagenErro("");
        
       
    }
  }).fail(() => {
    apagarInputsErro()
    mensagenErro("CEP Inválido");
  });
}

function mensagenErro(msg) {
  $("#mensagemErro").html(msg);
}

function apagarInputsErro(){
    $("#inputNumeroEndereco").prop('disabled', true)
    $("#flexCheckSemNumero").prop('disabled', true)

    $("#inputEndereco").val("");
    $("#inputBairro").val("");
    $("#inputCidade").val("");
    $("#inputEstado").val("");
}

function habilitarInput(id){
    $(id).prop('disabled', false)
}



function residenciaSemNumero(){
    var semNumero = $("#flexCheckSemNumero").prop('checked')
    console.log(semNumero)
    
    if(semNumero == true){
        $("#inputNumeroEndereco").prop('disabled', true).val("")
    }else{
        habilitarInput("#inputNumeroEndereco")
    }
}