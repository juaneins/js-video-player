console.log('Hello typescript');

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(7, 45);

let muted: boolean = true;

//numbers
let numerador = 42;
let denominador = 6;

let resultado = numerador / denominador;

//string
let nombre: string = 'my name is juan';

// arrays
let people: string[] = [];
people = ['isabel', 'german', 'Jessie'];

//people.push(100);
let peopleAndNumber: Array<string | number> = ['Jose', 100, 'Julian', 457];

//enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Rojo;

console.log(`My color favorito es ${colorFavorito}`);

//any
let comodin: any = { nombre: 'Joker' };

comodin = {};

// object

let someObject: object = { type: 'Class' };

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

console.log(fourPlus6);

function fullName(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const juan = fullName('juan', 'ballesteros');
const pepe = fullName('pepe');

// Interfaces
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 2,
  color: Color.Verde,
};

function area(r: Rectangulo) {
  return r.ancho * r.alto;
}

const areaRect = area(rect);

console.log(areaRect);

rect.toString = function () {
  return `Un rectangulo ${this.color}`;
};

console.log(rect.toString());
