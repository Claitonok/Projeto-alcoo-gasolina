
// Código de JavaScricpt
function calcularPreco(){
    let alcool = document.getElementById('Alcool').value;
    let gasolina = document.getElementById('Gasolina').value;
    let resultado  = alcool / gasolina;

    let mensagemDoUsuario;

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

