function nomes(){
	let op = true, nome = '', nn

	while(op){
		nn = prompt("Digite o nome")
		if(nn.toUpperCase() == 'FIM'){
			op = false
		}
		else{
		    nome = nn + ' ' + nome
		}
	}
	return alert(nome)
}

nomes()