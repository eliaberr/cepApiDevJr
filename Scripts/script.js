$("#inputCep").mask("99999-999")

var clientes = [];

loadClientes();

function loadClientes() {
  for (let cli of clientes) {
    addNewRow(cli);
  }
}



function save() {

    habilitarOuDesativarInput("#flexCheckSemNumero", true)
    habilitarOuDesativarInput("#inputNumeroEndereco", true)


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
        
        habilitarOuDesativarInput("#flexCheckSemNumero", false)
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

function habilitarOuDesativarInput(id, falseOrTrue){
    $(id).prop('disabled', falseOrTrue)
}





function residenciaSemNumero(){
    var semNumero = $("#flexCheckSemNumero").prop('checked')
    console.log(semNumero)
    
    if(semNumero == true){
        $("#inputNumeroEndereco").prop('disabled', true).val("")
    }else{
        habilitarOuDesativarInput("#inputNumeroEndereco", false)
    }
}

