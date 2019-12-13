function idades(){
	let idade = maior = menor = 0, op = true

	while(op){
		idade = prompt("Digite a idade")
		if(idade.toUpperCase() == "FIM"){
			op = false
		}
		else if(idade != ' '*99999){
		    if(idade >= 18){
			    maior += 1
		    }
		    else if(idade >= 0 || idade <= 17){
			    menor += 1
		    }
	    }
	}
	return alert(`De ${menor+maior} pessosas ${menor} e/sao menor(es) é ${maior} e/sao maior(es) de idade.`)
}

idades()