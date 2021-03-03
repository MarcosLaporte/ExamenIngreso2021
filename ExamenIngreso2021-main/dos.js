function mostrar()
{
  let nombre, cursada, materias, sexo, nota, edad;

  nombre = prompt("Ingrese su nombre:");
  cursada = prompt("Ingrese el tipo de cursada:").toLowerCase();
  while(cursada != "libre" && cursada != "presencial" && cursada != "remota"){
    cursada = prompt("Error. Reingrese el tipo de cursada:").toLowerCase();
  }
  materias = parseInt(prompt("Ingrese cantidad de materias:"));
  while (materias <= 0 || materias >= 8 || isNaN(materias)){
    materias = parseInt(prompt("Error. Reingrese cantidad de materias:"));
  }
  sexo = prompt("Ingrese su sexo:").toLowerCase();
  while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario"){
    sexo = prompt("Error. Reingrese su sexo:").toLowerCase();
    }
    nota = parseInt(prompt("Ingrese su nota:"));
    while(nota < 0 ||nota > 10 || isNaN(nota)){
      nota = parseInt(prompt("Error. Reingrese su nota:"));
    }
    edad = parseInt(prompt("Ingrese su edad:"));
    while (isNaN(edad)){
      edad = parseInt(prompt("Error. Reingrese su edad:"));
    }
    
}
