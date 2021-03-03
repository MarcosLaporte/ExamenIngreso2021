/*
ingresar 5 prod desinfeccion
nombre, tipo (alcohol/iac/quat), precio (100-300), cant (1-1000), 
tipo inflamable (inifugo, combustible, explosivo), marca

a)promedio de cant
b)tipo inflamable con + cant en total
c)cant IAC con precio<=200 en total
d)marca y tipo más caro
*/
function mostrar() {
  let nombre, tipo, precio, cant, tipoInf, marca;
  let cantAlc, cantIAC, cantQUAT;
  let contAlc, contIAC, contQUAT;
  let promedioAlc, promedioIAC, promedioQUAT;
  let precioA = 0,
    precioI = 0,
    precioQ = 0;
  let contInf = 0;
  let contC = 0;
  let masCaro;
  let i = 0;

  for (i = 0; i < 5; i++) {
    nombre = prompt("Ingrese nombre del producto:");
    tipo = prompt("Ingrese tipo de producto: (ALCOHOL/IAC/QUAT)").toUpperCase();
    while (tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT") {
      tipo = prompt(
        "Error. Reingrese tipo de producto: (ALCOHOL/IAC/QUAT)"
      ).toUpperCase();
    }
    precio = parseInt(prompt("Ingrese precio del producto:"));
    while (precio < 100 || precio > 300 || isNaN(precio)) {
      precio = parseInt(
        prompt("Error. Reingrese precio del producto: (Entre 100 y 300)")
      );
    }
    cant = parseInt(prompt("Ingrese cantidad:"));
    while (cant < 1 || cant > 1000 || isNaN(cant)) {
      cant = parseInt(prompt("Error. Reingrese cantidad: (Entre 1 y 1000)"));
    }
    switch (tipo) {
      case "ALCOHOL":
        precioA += precio;
        cantAlc += cant;
        contAlc++;
        break;
      case "IAC":
        precioI += precio;
        cantIAC += cant;
        contIAC++;
        break;
      case "QUAT":
        precioQ += precio;
        cantQUAT += cant;
        contQUAT++;
        break;
    }

    tipoInf = prompt(
      "Ingrese tipo de inflamable: (ignífugo/combustible/explosivo)"
    ).toLowerCase();
    while (
      tipoInf != "ignífugo" &&
      tipoInf != "combustible" &&
      tipoInf != "explosivo"
    ) {
      tipoInf = prompt(
        "Error. Reingrese tipo de inflamable: (ignífugo/combustible/explosivo)"
      ).toLowerCase();
    }
    if (
      tipoInf == "ignífugo" ||
      tipoInf == "combustible" ||
      tipoInf == "explosivo"
    ) {
      contInf++;
    }
    marca = prompt("Ingrese la marca del producto:");
    if (tipo == "IAC" && precio <= 200) {
      contC += cant;
    }
  }
  promedioAlc = cantAlc / contAlc
  promedioIAC = cantIAC / contIAC
  promedioQUAT = cantQUAT / contQUAT
  
  alert(
    "a) El promedio de Alcohol es " +
       promedioAlc +
      "\nEl promedio de IAC es " +
       promedioIAC +
      "\nEl promedio de QUAT es " +
      promedioQUAT
  );
  alert("b) El tipo inflamable con más cantidad de unidades es " + contInf);
  alert(
    "c) Se compraron " + contC + " unidades de IAC menores a $200 en total."
  );
  alert("d) La marca y tipo más caro de productos es: " + masCaro);
}
