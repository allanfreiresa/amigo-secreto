let amigos = [];

function adicionar() {

    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (amigo.value == '') {
        alert('Nome em branco nao é permitido!');
        return;
    }

    if (amigos.includes(amigo.value.toUpperCase())) {
        alert('Nome já adicionado!');
        return;
    }

    amigos.push(amigo.value.toUpperCase());

    amigos = removerDuplicatas(amigos);
    console.log("Remover duplicatas:", amigos);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';

    atualizarLista();
    atualizarSorteio();


}

function sortear() {

    /* if (amigos.length == '' || amigos.length == 1 ) {
         alert('não há sorteios para nomes em branco ou apenas um nome ');
         return;
     }*/

    if (amigos.length <= 3) {
        alert('Adicione pelo menos 4 pessoas');
        return;
    }


    // Testando a função com novaLista
    amigos = removerDuplicatas(amigos);
    console.log("Remover duplicatas:", amigos);


    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[i + 1] + '<br>'
        }
    }

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}


function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function () {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


/*
for (let numero = 1; numero <= 100; numero++) {
    if ((numero % 5) == 0) {
        console.log(numero);
    }
}*/


//manipulando arrays
// Declarando uma variável do tipo array
let minhaLista = [];

// Adicionando elementos com push
minhaLista.push(1, 2, 3, 3);
console.log("Adicionando elementos:", minhaLista);

// Criando uma nova variável
let outrosNumeros = [4, 5, 6];

// Concatenando arrays
let novaLista = minhaLista.concat(outrosNumeros);
console.log("Juntando Arrays:", novaLista);

//removendo o ultimo elemento 
// Removendo o último elemento
novaLista.pop();
console.log("Desafio 4:", novaLista);

//embaralhando array

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Embaralhando novaLista
novaLista = embaralharArray(novaLista);
console.log("Embaralhando a Lista:", novaLista);

//removendo informações duplicatas

// Função para remover duplicatas de um array
function removerDuplicatas(array) {
    return [...new Set(array)];
}

// Testando a função com novaLista
let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log("Remover duplicatas:", novaListaSemDuplicatas);



//Desafio 1: Crie uma função que valide se um número é positivo, negativo ou zero.
function validarNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}

console.log(validarNumero(-1))


//Desafio 2: Implemente uma função que verifique se uma pessoa é maior de idade.
function verificarIdade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(verificarIdade(15));



//Desafio 3: Desenvolva uma função que valide se uma string é vazia ou não.

function validarString(texto) {
    return texto === "" ? "String vazia" : "String não vazia";
}

console.log(validarString("Aqui há um texto?"))
console.log(validarString(""))


//Desafio 4: Crie uma função que determine se um ano é bissexto

function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2024));


//Desafio 5. Implemente uma função que calcule a média de dois números, interrompendo a: 
//execução se algum dos números não for válido
function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Um dos números não é válido.";
    }
    return (num1 + num2) / 2;
}

console.log(calcularMedia('w',5));


//Desafio 6. Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho
function obterTamanhoArray(arr) {
    return arr.length;
}

//exemplo de uso

const minhaLista1 = [1,2,3,4,5,6,7,8,9,10]

console.log(obterTamanhoArray(minhaLista1));


//Desafio 7: Crie um array e utilize a função includes para verificar se um elemento específico está presente


const meuArray = [10, 20, 30, 40, 50];
console.log("O array contém o número 30?", meuArray.includes(30));
//saída esperada: "O array contém o número 30?" true


//Desafio 8: Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

// Função que verifica se um elemento está presente no array
function verificarElementoNoArray(arr, elemento) {
    return arr.includes(elemento);
}

// Exemplo de uso
const meuArray1 = [10, 20, 30, 40, 50];
const elementoProcurado = 35;

// Utilizando a função para verificar a presença do elemento no array
const elementoEstaPresente = verificarElementoNoArray(meuArray1, elementoProcurado);

// Exibindo o resultado
if (elementoEstaPresente) {
    console.log(`O elemento ${elementoProcurado} está presente no array.`);
} else {
    console.log(`O elemento ${elementoProcurado} não está presente no array.`);
}


//Desafio 9: Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
const palavras = ["apple", "banana", "orange", "grape"];
console.log("A palavra 'banana' está no array?", palavras.includes("banana"));

//saída esperada: "A palavra 'banana' está no array?" true


//Desafio 10: Desenvolva uma função que receba um array de objetos representando 
//estudantes de um curso e um objeto que representa um estudante procurado. 
//Depois retorne se o objeto está presente no array.
// Função que verifica se um objeto está presente no array

function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

// Array de objetos representando alunos
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

// Objeto que queremos verificar se está presente no array
const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

// Utilizando a função para verificar a presença do objeto no array
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

// Exibindo o resultado
if (objetoEstaPresente) {
    console.log('O aluno está presente no array.');
} else {
    console.log('O aluno não está presente no array.');
}


//Desafio 11: Crie uma função que receba um array de números e retorne a soma 
//dos elementos pares e o produto dos elementos ímpares
function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}

const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);




