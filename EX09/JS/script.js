function nomeC(){
	let nome, n = 0
	nome = prompt("Digite o nome completo")
	n = prompt("Digite um número")

	if(n > nome.length){
		return alert("ERRO: Número maior que a quantidade de carácteres.")
	}
	if(n <= 0){
		return alert("ERRO: Insira um número maior que 0 (zero).")
	}
	return alert(nome[n])
}
nomeC()