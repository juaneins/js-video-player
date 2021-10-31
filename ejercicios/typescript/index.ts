console.log('Hello typescript');

function add(a: number, b: number) {
  return a + b;
}

const sum = add(7, 9);

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
