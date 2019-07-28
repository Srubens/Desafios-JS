(function (){
	"use script";

	// Desafio da semana #4
	/*
	Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
	um único parâmetro como argumento. Essa função deve retornar `true` se o
	equivalente booleano para o valor passado no argumento for `true`, ou `false`
	para o contrário.
	*/
	let isTruthy = function isTruthy(param){
		return !!param;
	}


	// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
	console.log(isTruthy(false));
	console.log(isTruthy(0));
	console.log(isTruthy(""));
	console.log(isTruthy(null));
	console.log(isTruthy(undefined));
	console.log(isTruthy(NaN));

	/*
	Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
	*/
	console.log(isTruthy(true));
	console.log(isTruthy({}));
	console.log(isTruthy([]));
	console.log(isTruthy("nome"));
	console.log(isTruthy(new Date()));
	console.log(isTruthy(-42));
	console.log(isTruthy(2.5));
	console.log(isTruthy(Infinity));
	console.log(isTruthy(String));
	console.log(isTruthy(Number));

	/*
	Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
	seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
	- `marca` - String
	- `modelo` - String
	- `placa` - String
	- `ano` - Number
	- `cor` - String
	- `quantasPortas` - Number
	- `assentos` - Number - cinco por padrão
	- `quantidadePessoas` - Number - zero por padrão
	*/
	let carro = {
		marca:'Fiat',
		modelo:'Uno',
		placa:'GHK-2579',
		ano:2019,
		cor:'Vinho',
		quantasPortas:4,
		assentos:5,
		quantidadePessoas:0
	};

	/*
	Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
	passado por parâmetro.
	*/
	carro.mudarCor = function mudarCor(param){
		carro.cor = param;
		return carro.cor;
	}

	console.log(carro.mudarCor('Azul'));

	/*
	Crie um método chamado `obterCor`, que retorne a cor do carro.
	*/
	carro.obterCor = function obterCor(){
		return carro.cor; 
	}

	console.log(carro.obterCor())

	/*
	Crie um método chamado `obterModelo` que retorne o modelo do carro.
	*/
	carro.obterModelo = function obterModelo(){
		return carro.modelo;
	}

	console.log(carro.obterModelo());

	/*
	Crie um método chamado `obterMarca` que retorne a marca do carro.
	*/
	carro.obterMarca = function obterMarca(){
		return carro.marca;
	}

	console.log(carro.obterMarca());

	/*
	Crie um método chamado `obterMarcaModelo`, que retorne:
	"Esse carro é um [MARCA] [MODELO]"
	Para retornar os valores de marca e modelo, utilize os métodos criados.
	*/
	carro.obterMarcaModelo = function obterMarcaModelo(){
		return `Esse carro é um ${carro.marca} ${carro.modelo}`;
	}

	console.log(carro.obterMarcaModelo());

	/*
	Crie um método que irá adicionar pessoas no carro. Esse método terá as
	seguintes características:
	- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
	número não precisa encher o carro, você poderá acrescentar as pessoas aos
	poucos.
	- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
	- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
	deve retornar a frase: "O carro já está lotado!"
	- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
	parâmetro for ultrapassar o limite de assentos do carro, então você deve
	mostrar quantos assentos ainda podem ser ocupados, com a frase:
	"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
	- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
	citado acima, no lugar de "pessoas".
	*/
	carro.addPessoas = (param) =>{
		let addNoCArro = carro.quantidadePessoas + param;
		let quantaCabem = carro.assentos - carro.quantidadePessoas;
		if(carro.quantidadePessoas === carro.assentos && addNoCArro >= carro.assentos){
			return `O carro já está lotado!`;
		}

		if(addNoCArro > carro.assentos){
			return `Só cabem mais ${quantaCabem} pessoas!`;
		}
		carro.quantidadePessoas += param;
		return `Já temos ${addNoCArro} pessoas no carro!`;
	}

	console.log(carro.addPessoas(2));
	console.log(carro.addPessoas(4));
	console.log(carro.addPessoas(3));

	/*
	Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
	utilize sempre o formato de invocação do método (ou chamada da propriedade),
	adicionando comentários _inline_ ao lado com o valor retornado, se o método
	retornar algum valor.

	Qual a cor atual do carro?
	*/
	console.log(`A cor do carro é ${carro.obterCor()}`);

	// Mude a cor do carro para vermelho.
	carro.mudarCor('Vermelho');

	// E agora, qual a cor do carro?
	console.log(`A cor do carro é ${carro.obterCor()}`);

	// Mude a cor do carro para verde musgo.
	carro.mudarCor('verde musgo');

	// E agora, qual a cor do carro?
	console.log(`A cor do carro é ${carro.obterCor()}`);

	// Qual a marca e modelo do carro?
	console.log(carro.obterMarcaModelo());

	// Adicione 2 pessoas no carro.
	console.log(carro.addPessoas(2));

	// Adicione mais 4 pessoas no carro.
	console.log(carro.addPessoas(4));

	// Faça o carro encher.
	carro.quantidadePessoas = 0;
	console.log(carro.addPessoas(5));

	// Tire 4 pessoas do carro.
	carro.quantidadePessoas = 4;
	console.log(carro.quantidadePessoas);

	// Adicione 10 pessoas no carro.
	console.log(carro.addPessoas(10));

	// Quantas pessoas temos no carro?
	console.log(carro.quantidadePessoas);

})();