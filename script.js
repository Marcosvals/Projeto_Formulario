
const nomeInput = document.querySelector("#nome");
const dataInput = document.querySelector("#data");
const enderencoInput = document.querySelector("#enderenco");
const numeroInput = document.querySelector("#numero");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");
const cepInput = document.querySelector("#CEP");
const apelidoInput = document.querySelector("#Apelido");
const cpfInput = document.querySelector("#cpf");
const rgInput = document.querySelector("#rg");
const validarButton = document.querySelector("#Validar");
const errorMessage = document.querySelector(".msgErro");

validarButton.addEventListener('click', function(b){
    b.preventDefault();

    const nomeValor = nomeInput.value;
    const dataValor = dataInput.value;
    const enderencoValor = enderencoInput.value;
    const numeroValor = numeroInput.value;
    const bairroValor = bairroInput.value;
    const cidadeValor = cidadeInput.value;
    const cepValor = cepInput.value;
    const apelidoValor = apelidoInput.value;
    const cpfValor = cpfInput.value;
    const rgValor = rgInput.value;

    if(nomeValor === '' || dataValor === null || enderencoValor === '' || numeroValor === '' || bairroValor === '' || cidadeValor === '' || cepValor === '' || apelidoValor === '' || cpfValor === '' || rgValor === ''){
        errorMessage.textContent = "Por favor, preencha todos os campos!!!";
        errorMessage.classList = "msgErro";
        return;
    }
})

const calcularIdade = document.querySelector("#Calcular");


calcularIdade.addEventListener('click', function(a){
    a.preventDefault();
    let dataAtual = new Date();
    let mesAtual = dataAtual.getMonth() + 1;
    let anoAtual = dataAtual.getFullYear();
    let dataAniversario = new Date(dataInput.value);
    let anoAniversio = dataAniversario.getFullYear();
    let MesAniversario = dataAniversario.getMonth();
    let idade = anoAtual - anoAniversio;
    if(MesAniversario > mesAtual){
        idade--;
    }
    const idadeCalculada = document.querySelector("#msgIdade");
    idadeCalculada.textContent = `Sua idade atual é: ${idade} anos`
    errorMessage.classList = "msgIdade";
    return;
})
