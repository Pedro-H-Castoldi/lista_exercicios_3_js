function horas(){
	const dataAtual = new Date()
	const horaAtual = dataAtual.getHours()
	if(horaAtual >= 5 && horaAtual <= 12){
		return alert("Bom dia. Bem-vindo à página do IFCE")
	}
	else if(horaAtual >= 12 && horaAtual < 18){
		return alert("Bom tarde. Bem-vindo à página do IFCE")
	}
	else{
		return alert("Bom noite. Bem-vindo à página do IFCE")
	}
}

horas()