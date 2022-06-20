alert("bienvenidos a la Casa de tatuajes");
let tatuaje1 = prompt("Estas buscando presupuesto por un tatuaje?");

if ((tatuaje1 == "") ||( tatuaje1 == null)) {
    let mensaje ="EY!!   Si o no??"
    console.log(mensaje)
    alert(mensaje);
    let tatuaje1 = prompt("Estas buscando un tatuaje?");
} else if (tatuaje1 == "no"){ 
    alert("Adios")

    while (tatuaje1 == "no"){
        tatuaje1 = prompt("Estas buscando presupuesto por un tatuaje?")
    }

}
/*while (tatuaje1){
    if(tatuaje1 == "no")

    tatuaje1 = prompt("Estas buscando un tatuaje?");
}*/

let altura = prompt("ingrese la altura del tatuaje ( en CM) ");
let ancho = prompt("ingrese el ancho del tatuaje ( en CM) ");
let color = prompt("es a color?? Si / No / No estoy seguro...tal vez.... no lo se... dudo... ");
let diseno = prompt("ya sabes el diseño?? Si / No / quiero que me sorprendan....tal vez....... me faltan unos detallitos...");
let mayorde = prompt("eres mayor de edad??");
let mayorde2 = prompt("seguro no?");
let nacimiento = prompt("ingrese año de nacimiento");
let disenio = " ";
let coloreado = " ";


if ((tatuaje1 == "") ||( tatuaje1 == null)) {
    let mensaje ="EY!!   Si o no??"
    console.log(mensaje)
    alert(mensaje);
    let tatuaje1 = prompt("Estas buscando un tatuaje?");
}


if ((altura == "") ||( altura == null)) {
    let mensaje = "ingrese medida valida"
    console.log(mensaje)
    alert(mensaje);
    let altura = prompt("ingrese la altura del tatuaje ( en CM) ");
}

console.log( "Altura:" + altura)

if ((ancho == "") ||( ancho == null)) {
    let mensaje ="ingrese medida valida"
    console.log(mensaje)
    alert(mensaje);
    let ancho = prompt("ingrese el ancho del tatuaje ( en CM) ");
}

console.log( "Ancho:" + ancho)

if ((color == "") ||( color == null)) {
    let mensaje ="EY!!   Si o no??";
    console.log(mensaje)
    alert(mensaje);
    color = prompt("es a color?? Si / No / No estoy seguro...tal vez.... no lo se... dudo... ");
}else if (color == "si"){
    coloreado = 0.4;
}else if (color == "no"){
    coloreado = 0;
}else {
    coloreado = 0.5;
}

if ((diseno == "") ||( diseno == null)) {
    let mensaje ="EY!!   Si o no??";
    console.log(mensaje)
    alert(mensaje);
    diseno = prompt("ya sabes el diseño?? Si / No / quiero que me sorprendan....tal vez....... me faltan unos detallitos...");
}else if (diseno == "si"){
    disenio = 0;
}else if (diseno == "no"){
    disenio= 0.3;
}else {
    disenio = 0.4;
}

nacimiento = parseInt(nacimiento.replace(".",""));
if ((nacimiento == "") ||( nacimiento == null)) {
    let mensaje ="Por favor .... en que año naciste???";
    console.log(mensaje)
    alert(mensaje);
    nacimiento = prompt("ingrese año de nacimiento");
}else if (nacimiento > 2004){
    let mensaje = "no se realizan tatuajes a menosres de 18 años";
    alert(mensaje);

    while (nacimiento){
        if(nacimiento > 2004)

        alert ("adios");
    }
}
calculo_tamaño = (altura * ancho);
calculo_cm2 = (0.1 * calculo_tamaño)
const Preciario = (400);
//const coloreado = (0.4);
//const disenio = (0.3);
calculo_subtotal = (Preciario * calculo_cm2);
calculo_coloreado = (calculo_subtotal * coloreado);
calculo_diseno = (calculo_subtotal * disenio);
console.log("subtotal: " + calculo_subtotal);
console.log("color: " + calculo_coloreado);
console.log("diseño: " + calculo_diseno);
calculo_final = (calculo_subtotal + calculo_coloreado + calculo_diseno);
console.log(calculo_final);

alert("su presupuesto para pincharse es de: $" + calculo_final);

