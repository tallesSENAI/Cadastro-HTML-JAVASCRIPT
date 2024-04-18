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

    tabelaCadastroDiv.innerHTML += `<span style="color: Red; background-Color: Green;">Nome: ${nomeCompletoInput.value}</span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: White; background-Color: Black;">Data de Nascimento: ${dataNascimentoInput.value} </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Yellow; background-Color: Purple;">Email: ${emailInput.value}        </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Grey; background-Color: Blue;">Senha: ${senhaInput.value}            </span><br>`;
    tabelaCadastroDiv.innerHTML += `<p></p>`

    console.log("Usuário cadastrado")
}

