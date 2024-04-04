/* Consolas de información */ 
console.log("Esto es un log");
console.error("Esto es un error");
console.warn("Esto es un warn");
console.info("Esto es un info");
console.debug("Esto es un debug");

console.table([{nombre:"Diego",edad:20,profesion:"MAC"}],["nombre"]);
console.table([{nombre:"Diego",edad:20,profesion:"MAC"}]);

/* Tipos de datos y declaración de variables */

const edad:number = 18;

let edad2:number = 20;
edad2 = 19;

var edad3:number = 22;
edad3 = 40;
//edad3 = "Hola"; ERROR

let edad5 = 10;
console.log(edad5);

//Declaración sin valor
let algo:number;


/* Creacion de datos */
type respuesta = "si" | "no";
let res:respuesta = "si";
//let resERROR:respuesta = 5;

/* Interface */ //Definición de estructura de datos
type genero = "masculino" | "femenino"

interface Usuario{
    nombre:string;
    edad:number;
    sexo:genero;
    correo:string;
}

let Pepe:Usuario = {nombre:"PEPE",edad:20,sexo:"masculino",correo:"algo"};

/* Arreglos */
let arreglo:number[];

let arregloUsuario:Usuario[];
arregloUsuario = [{nombre:"PEPE",edad:20,sexo:"masculino",correo:"algo"},{nombre:"jose",edad:68,sexo:"masculino",correo:"algo"}, {nombre:"Juana",edad:25,sexo:"femenino",correo:"algo"}]

console.table(arregloUsuario);

//Extencion y propiedades
interface User{
    nombre:string;
    edad:number;
}

interface Empleado extends User{
    salario:number;
    estado:boolean;
}

let JOSE:Empleado = {nombre:"Jose",edad:33,estado:true,salario:20000};

interface User{
    genero?:"M"|"F"|"O";
}

//Itersección type
type user = "algo" | "otroAlgo";
type empleado = "salario" | "puesto";

//user & empleado;