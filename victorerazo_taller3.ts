// ---------------- Parte 1 ----------------

interface Direccion {
  calle: string;
  ciudad: string;
  pais: string;
}

interface Estudiante {
  nombre: string;
  curso: string;
  direccion: Direccion;
  mostrarInfo: () => string;
}

const estudiante: Estudiante = {
  nombre: "Juan",
  curso: "Matemáticas",
  direccion: {
    calle: "Cll 15, san ignacio",
    ciudad: "pasto",
    pais: "Colombia",
  },
  mostrarInfo() {
    return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
  }
};

console.log(estudiante.mostrarInfo());


interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  mostrarDetalle: () => string;
}

const producto: Producto = {
  id: 1,
  nombre: "Laptop",
  precio: 3000,
  stock: 10,
  mostrarDetalle() {
    return `El producto ${this.nombre} cuesta ${this.precio} y hay ${this.stock} unidades disponibles`;
  }
};

console.log(producto.mostrarDetalle());


interface Pelicula {
  titulo: string;
  director: string;
  duracion: number;
  genero: string;
  reproducir: () => string;
}

const pelicula: Pelicula = {
  titulo: "Avengers: Endgame",
  director: "Anthony y Joe Russo",
  duracion: 180,
  genero: "Acción",
  reproducir() {
    return `Reproduciendo: ${this.titulo} - Dirigida por ${this.director}`;
  }
};

console.log(pelicula.reproducir());


interface Vehiculo {
  marca: string;
  modelo: string;
  año: number;
  encender: () => string;
}

const vehiculo: Vehiculo = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2021,
  encender() {
    return `El auto ${this.marca} ${this.modelo} está encendido`;
  }
};

console.log(vehiculo.encender());


interface Usuario {
  username: string;
  password: string;
  roles: string[];
  loguear: () => string;
}

const usuario: Usuario = {
  username: "admin",
  password: "12345",
  roles: ["admin", "editor"],
  loguear() {
    return `El usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(", ")}`;
  }
};

console.log(usuario.loguear());


// ---------------- Parte 2 ----------------

// Tipos simples y uniones
let myValue2: number | string | boolean = 10;

let myBoolean: boolean = true;

let mathPiPoint: number = 3.14;

let otherMultipleType: number | boolean | "siyaq" | "ornitapato" = "siyaq";

let myVar: string;
myVar = "123";  
myVar = "true"; 

const myConstant: number = 100; 

let inferredByType = "texto inicial"; // TS lo infiere como string

const isActive: boolean = true; 

let mixed: number | string = "texto"; 
mixed = 50;

let wide: string = "hola"; 

let myNumber: number = 100; 

let numbers: number[] = [1, 2, 7]; 

let tuples: [string, number] = ["hola", 1];

let dataTuple: [string, boolean] = ["true", false]; 

let text: string | null = "Hola mundo"; 
text = null; 

let color: "rojo" | "verde" | "azul" | "amarillo"; 
color = "rojo"; 
color = "amarillo"; 

let valor: any = 10; 
valor = "supercambio!";  

const version: number = 1.0; 
let version2: number = 2.0; 

// Objeto con propiedad dinámica
interface Persona {
  nombre: string;
  [key: string]: any; // permite agregar más propiedades
}

let persona: Persona = { nombre: "Juan" }; 
persona["apellido"] = "Pérez"; 

let edad: number | undefined;