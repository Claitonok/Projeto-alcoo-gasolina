
// Código de JavaScricpt
function calcularPreco(){
    var alcool = document.getElementById('Alcool').value;
    var gasolina = document.getElementById('Gasolina').value;
    var resultado  = alcool / gasolina;

    var mensagemDoUsuario;

    if (alcool == "") {
        mensagemDoUsuario = "O preço do Alcool e obrigatorio";
        document.getElementById("mensagem").innerHTML = `${mensagemDoUsuario}`;
    } else if (gasolina == "") {
        mensagemDoUsuario = "O preço do gasolina e obrigatorio";
        document.getElementById("mensagem").innerHTML = `${mensagemDoUsuario}`;
    } else {

        if (resultado >= 0.7) {
            mensagemDoUsuario = "melhor usar Gasolina";
            document.getElementById("mensagem").innerHTML = `${mensagemDoUsuario}`;
        } else {
            mensagemDoUsuario = "melhor usar Álcool";
            document.getElementById("mensagem").innerHTML = `${mensagemDoUsuario}`;
        }

    }
}

