let aux = parseInt(document.getElementsByTagName("span")[0].innerHTML);
switch(aux){
	case 1:
		dado = prompt("Digite um dado");
		if(confirm("Deseja verificar o tipo do dado informado?")){
			if(parseInt(dado)){
				dado = parseInt(dado);
			}
			document.write("<h3>Tipo do dado: "+typeof(dado)+"</h3>");
		}
		else{
			document.write("Obrigado por visitar essa página");
		}
		break;
	case 2:
		dado = parseInt(prompt("Digite um número inteiro positivo"));
		if(dado > 0){
			if(dado == 2 || dado == 3 || dado == 5 || dado == 7){
				alert("O número é primo");
			}
			else if(dado == 1){
				alert("O número não é primo");
			}
			else if(dado % 2 !=0 && dado % 3 !=0 && dado % 5 !=0 && dado % 7 !=0 ){
				alert("O número é primo");
			}
			else{
				alert("O número não é primo");
			}
			
		}
		else{
			document.write("Valor Inválido");
		}
		break;
	case 3:
		dado = parseInt(prompt("Digite um número inteiro positivo"));
		if(dado > 0){
			if(dado % 2 ==0){
				alert("O número é par");
			}
			else{
				alert("O número é impar");
			}
		}
		else{
			document.write("Valor Inválido");
		}
		break;
	case 4:
		dado = parseInt(prompt("Digite um número inteiro positivo"));
		num = dado;
		if(dado > 0){
			for(i = dado-1; i >0; i--){
				dado = dado * i ;
			}
			alert("Resultado do fatorial de "+num+" é "+dado);
		}
		else{
			document.write("Valor Inválido");
		}
		break;
}