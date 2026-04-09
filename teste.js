function logar(){
    var nome = document.getElementById('inputNome').value
    var sobrenome = document.getElementById('inputSobrenome').value
    var data = document.getElementById('inputData').value
    var rg = document.getElementById('inputRg').value
    var rua = document.getElementById('inputRua').value

    if(nome != '' && sobrenome != ''){
        alert("Dados enviados com sucesso")
    }else{
        document.getElementById("erro").innerHTML = 'Usuário/Senha incorretos! Tente novamente.'
    }

}