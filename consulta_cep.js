//prencher o formulário com os dadso de retorno da API
function prencherFormulario() {
document.getElementById("endereco").value = endereco.logradouro;
document.getElementById("bairro").value = endereco.bairro;
document.getElementById("cidade").value = endereco.localidade;
document.getElementById("estado").value = endereco.uf;

}

//verifica se o que foi digitado pelo usuário somente números
function eNumero(numero){
    return /^[0-9]+$/.test(numero);
}

// verifica se o cep possui tamanho 8 e so possui numeros
function cepValido(cep){
    return cep.length == 8 && eNumero(cep);
}

// Função para limpar os campos quando da erro.
function limpaCampo(){
    document.getElementById("endereco").endereco.logradouro = "";
    document.getElementById("bairro").endereco.bairro = "";
    document.getElementById("cidade").endereco.localidade = "";
    document.getElementById("estado").endereco.uf = "";
}

// função para pesquisar o cep via API
async function pesquisaCEP() {
    
    const cep = document.getElementById("cep").value.replace("-","");
    const url =`https://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)) {
        const dados = await fetch(url); //fetch busca recurso de rede(ex:endereço)
        const endereco = await dados.json();
        console.log(endereco);

        if (endereco.hasOwnProperty("erro")){ // retorna um valor booleano 
            document.getElementById("endereco").value="CEP NAO ENCONTRADO!"
        }else{
            prencherFormulario(endereco)
        }

        prencherFormulario(endereco);
    }else{
        document.getElementById("endereco").value = "CEP INCORRRETO!"
       
     }

    
    
}

//document.getElementById('cep').addEventListener("focusout",pesquisaCEP);
document.getElementById('limpar').addEventListener("limpar",limpaCampo);
// tentando criar o botao 
const button = document.querySelector('limpar');

button.addEventListener('click', limpaCampo);





