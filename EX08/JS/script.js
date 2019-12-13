function nomeCompleto(){
	let nome = prompt("Insisra seu nome")
	let sbnome = prompt("Insisra seu sobrenome")
	
	if(nome.length < 4){
		return alert("ERRO: O nome deve conter pelo menos 4 caracteres!\nNOME INVALIDO.")
	}
	if(sbnome.length == 0){
		return alert("ERRO: Deve conter sobrenome!\nNOME INVALIDO.")
	}
	for(let i=0; i<nome.length; i++){
		if(!isNaN(nome[i]) || !isNaN(sbnome[i])){
			return alert("ERRO: o nome não pode conter números!\nNOME INVÁLIDO.")
		}
	}
	let nnn = nome.split(" ")
	let sss = sbnome.split(" ")

	for(i=0; i<nnn.length; i++){

		nnn[i][0] = nnn[i][0].toUpperCase()
		if(nnn[i] == "de" || nnn[i] == "do" || nnn[i] == "de"){
			nnn[i] = nnn[i].toLowerCase()
		}
	}
	for(i=0; i<sss.length; i++){

		sss[i][0] = sss[i][0].toUpperCase()
		if(sss[i] == "de" || sss[i] == "do" || sss[i] == "de"){
			sss[i] = sss[i].toLowerCase()
		}
	}
	return alert(`NOME VÁLIDO: ${nome} ${sbnome}.`)
}

nomeCompleto()