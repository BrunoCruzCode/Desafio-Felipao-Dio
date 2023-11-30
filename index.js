 // Desafio Felipão Dio.me 

 let nickname = "Monkey D Luffy "

 let xp = 100000
 
 let valor = "3 Milhões"
 
 let nivel = ""
 
 if (xp <= 1000) {nivel = "Ferro "}
 if (xp <= 2000) {nivel = "Bronze "}
 if (xp <= 6000) {nivel = "Prata "}
 if (xp <= 7000) {nivel = "Ouro "}
 if (xp <= 8000) {nivel = "Platina "}
 if (xp <= 9000) {nivel = "Ascendente "}
 if (xp <= 10000) {nivel = "Imortal "}
 if (xp >= 100000) {nivel = "Rei dos Piratas "}
 
 console.log ("O Herói de nome " + nickname + "está no nível " + nivel + "com o valor de procurado de " + valor + " de Berries")