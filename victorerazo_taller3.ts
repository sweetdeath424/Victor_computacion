// ---------------- Parte 1 ----------------
// Definición de una interfaz para Direccion
interface Direccion { 
  calle: string; 
  ciudad: string; 
  pais: string; 
}

// Definición de una interfaz para Estudiante
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
    // Uso de this para acceder a propiedades dentro del objeto
    return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`; 
  } 
};

console.log(estudiante.mostrarInfo());


// Definición de una interfaz para Producto
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


// Definición de una interfaz para Pelicula
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


// Definición de una interfaz para Vehiculo
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


// Definición de una interfaz para Usuario
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

// Error: el tipo está mal escrito ("truue")
// Corrección: usar boolean
let myValue: number | string | true = 10;  
let myValue2: number | string | boolean = 10;  

// Error: asignando un string a un boolean
let myBoolean: Boolean = true;  
// Correcto sería boolean en minúscula
// let myBoolean: boolean = "true";  

// let mathPiPoint: number = 3.14; // (no debe ser string)

// Error: mal tipeado de union types
let otherMultipleType: number | boolean | "siyaq" | "ornitapato" = "siyaq";  

let myVar: string;  
myVar = "123";  
// myVar = 123; // number no válido
myVar = "true";  
// myVar = true; // boolean no válido

const myConstant: number = 100;  

let inferredByType = "texto inicial";  
// inferredByType = 123; // error, porque ya es string

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

let color: "rojo" | "verde" | "azul" | "amarillo"; // union literal
color = "rojo";  
color = "amarillo";  
// color = "negro"; // no permitido

let valor: any = 10; // any permite cualquier tipo
valor = "supercambio!";  

const version: number = 1.0;  
let version2: number = 2.0;  

let persona = { nombre: "Juan" }; // objeto con propiedad nombre
persona["apellido"] = "Pérez"; // se puede extender dinámicamente

let edad: number | undefined; // corregido (antes estaba mal definido)
