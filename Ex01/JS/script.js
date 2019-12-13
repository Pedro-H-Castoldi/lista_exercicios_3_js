function mNota(){
	let sum = cont = 0, op = true, nota

	while(op){
		nota = prompt(`Digite a nota ${cont + 1}`)

		if(nota.toUpperCase() == "FIM"){

			let c = confirm("Certeza de que quer encerrar?")
			if(c){
				return alert(sum/cont)
				op = false
			}
		}
		else{
			sum += Number(nota)
			cont++
		}

	}
	
}
mNota()