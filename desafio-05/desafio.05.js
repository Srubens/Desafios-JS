(function(){
    "use script";

/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arr = ["nome", true, 8.7, 24, {age:55}];
let newArr = ["Rubens", false, 87, -24, {job:'Designer'}];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArr(param = []){
    return param;
}

console.log(myArr(newArr));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArr(arr));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrIndice(param = [], numb){
    numb = param[numb];
    return numb
}

console.log( arrIndice( [12,"rubens",{nome:"rubens"}, true], 2) );

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arrDif = ["Acerola", 2.4, {teste:"ativo"}, function myfnc(){ return 'ola'; }, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( arrIndice( arrDif, 2 ) );
console.log( arrIndice( arrDif, 3 ) );
console.log( arrIndice( arrDif, 4 ) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookname){
    let books = {
        'livro1':{
            nome:'livro1',
            quantidadePaginas:300,
            autor:'Nome do autor',
            editora:'Abril'
        },
        'livro2': {
            nome:'livro2',
            quantidadePaginas: 750,
            autor: 'Nome do Segundo Autor',
            editora: 'Nova'
        },
        'livro3': {
            nome:'livro3',
            quantidadePaginas: 500,
            autor: 'Nome do Terceiro Autor',
            editora: 'Janela'
        }
    };

    return !bookname ? books : books[bookname];

}

console.log(book('livro1'));

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro ${book('livro1').nome} tem ${book('livro1').quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${book('livro1').nome} é ${book('livro1').autor}!`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${book('livro1').nome} foi publicado pela editora ${book('livro1').editora}!`);

})();