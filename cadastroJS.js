/*o JavaScript vai percorrer o HTML e vai pegar esses elementos automaticamente por conta do 'getElementById' */
const nomeCompletoInput = document.getElementById('nomeCompletoCadastro');
const dataNascimentoInput = document.getElementById('dataNascimentoCadastro');
const emailInput = document.getElementById('emailCadastro');
const senhaInput = document.getElementById('senhaCadastro');
const tabelaCadastroDiv = document.getElementById('tabelaCadastro');

function cadastrarUsuario(){
    console.log(nomeCompletoInput.value); /* "value" funciona em tags de INPUT, TEXTEAREA e SELECT */
    console.log(dataNascimentoInput.value);
    console.log(emailInput.value);
    console.log(senhaInput.value); 
    console.log(tabelaCadastroDiv); /* "value" não é usado quando se há uma classe DIV, ele é usado apenas para INPUT, TEXTAREA e SELECT */

    const paragrafo = document.createElement('p'); /*"document.createElement" é usado para crar um elemento (neste caso esta criando um parágrafo)*/
    paragrafo.innerText = "<strong>Sucesso InnerText </strong>"; /* "innertext" ira adicionar um texto ao elemento, independente se ele for um <p>, um <span> ou outros*/
    paragrafo.innerHTML = "<strong>Sucesso InnerHTML</strong>"; /* "innerHTML" aceita as tags HTMLs e às aplica no texto */
    console.log(paragrafo); 

    tabelaCadastroDiv.append(paragrafo); /* "append" adiciona o conteúdo na tela */

    console.log("Usuário cadastrado")
}

