function numeros(){
	let n = 0
	let v = [5];
    for(var i=0; i < 5; i++){
        n = prompt("Digite um número")
        if(n){
        	v[i] = n
        }
        else{
        	break
        }
    }
    return alert(`O maior número é: ${Math.max(... v)}`)
}
numeros()