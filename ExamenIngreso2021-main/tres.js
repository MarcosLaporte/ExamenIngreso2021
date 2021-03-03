function mostrar() {
  let nombre, estciv, edad, temp, sexo, seguir;
  let precio = 600;
  let contV = 0;
  let nombreSo, edadSo, minEdad, flagSo = 0; 
  let total = 0, desc = 0;
  let contMayor = 0, contTotal = 0;
  let porcentaje;
  
  do {
    nombre = prompt("Ingrese su nombre: ");
    estciv = prompt(
      "Ingrese su estado civil: (soltero/casado/viudo)"
    ).toLowerCase();
    while (estciv != "soltero" || estciv != "casado" || estciv != "viudo") {
      estciv = prompt(
        "Error. Reingrese su estado civil: (soltero, casado, viudo)"
      ).toLowerCase;
    }
    edad = parseInt(prompt("Ingrese su edad"));
    while (isNaN(edad) || edad < 18) {
      edad = parseInt(prompt("Error. Reingrese su edad:"));
    }
    temp = parseInt(prompt("Ingrese su temperatura corporal:"));
    while (isNaN(temp)) {
      temp = parseInt(prompt("Reingrese su temperatura corporal."));
    }
    sexo = prompt("Ingrese su sexo (f ó m)").toLowerCase();
    while (sexo != "f" || sexo != "m") {
      sexo = prompt("Error. Reingrese su sexo: (f o m)").toLowerCase;
    }

    switch (estciv) {
      case "soltero":
        if (sexo == "f") {
          if (flagSo == 0) {
            edadSo = edad;
            minEdad = edad;
            nombreSo = nombre;
            flagSo = 1;
          } else if (minEdad > edad) {
            nombreSo = nombre;
            edadSo = edad;
            minEdad = edad;
          }
        }
        break;
      case "viudo":
        if (edad >= 60) {
          contV++;
        }
        break;
    }
    contTotal++;

    if (edad >= 60) {
      contMayor++;
    }

    total += precio;
    seguir = prompt("Desea continuar? (s/n)").toLowerCase();
  } while (seguir == "s");

  porcentaje = (contMayor / 100) * contTotal;
  if (porcentaje >= 50) {
    desc = total - total * 0.25;
  }

  alert(
    "a) La cantidad de personas con estado viudo de más de 60 años es " + contV
  );
  alert(
    "b) La mujer soltera mas joven se llama " +
      nombreSo +
      " y tiene " +
      edadSo +
      "años."
  );
  alert("c) El viaje total sin descuento sale $" + total);
  if (desc == 0) {
    alert("d) No hay descuento");
  } else {
    alert("d) El precio final es $" + desc);
  }
}
