let nome, nsem

nome = prompt("Digite seu nome completo")

nsem = nome.replace(/[ ]+/g, '');
alert(`Seu nome possui ${nome.length} caracteries contando com os espaços\n
	e ${nsem.length} sem  os espaço(s).`)

var s = "pedro h";
s = s.replace(/[ ]+/g, '');
alert(s);