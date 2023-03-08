
const user = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,

};
const book = {
    isbn: 23453,
    author: "J. Simmons",
    pages: 250,
    title: "The Dark",
    id: 245
};
const movie = {
    title: "The Lord of the Rings",
    director: "Peter Jackson",
    date: 2001,
    genre: "Fantasy"
};

/** Comprueba si el objeto tiene propiedad id. */

const hasId = randomObj => {
    const { id } = randomObj;
    return id ? true : false;
}
console.log("¿El objeto tiene id? ");
console.log(hasId(user));
console.log(hasId(book));
console.log(hasId(movie));

const names = ["Antonio", "Javi", "Lissette", "Ana", "alberto", "Manolo", "Carmen"];

/** Devuelve el primer elemento de un array. */

const head = array => {
    const [first] = array;
    return first;
};
console.log("Primer nombre de la lista: " + head(names));

/** Devuelve todos los elementos de un array menos el primero. */

const tail = array => {
    const [, ...restElements] = array;
    return restElements.join(", ");
};
console.log("Quitando primer nombre de la lista: " + tail(names));

/** Coloca el primer elemento de un array en la última posición. */

const swapFirstToLast = array => {
    const [first, ...restElements] = array;
    const newArray = restElements.join(", ") + ", " + first;
    return newArray;
};
console.log("Primer nombre al final: " + swapFirstToLast(names));

/** Devuelve un objeto quitándole la propiedad id. */

const excludeId = array => {
    const { id, ...rest } = array;
    return rest;
};
console.log("QUITANDO ID DEL OBJETO:");
console.log(excludeId(user));
console.log(excludeId(book));
console.log(excludeId(movie));

/** Devuelve un nuevo array con las palabras que empiecen por A. */

const wordsStartingWithA = array => array.filter(a => a[0].toUpperCase() === "A");
console.log("Nombres que empiezan por A: " + wordsStartingWithA(names));

/** Devuelve un string con la concatenación de strings dados y separados por | */

const concat = (...arrays) => arrays.join(" | ");
console.log(concat("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"));

const randomNums = [5, 9, 54, 2, 65, 15, 91, 3];

/** Devuelve el array de números multiplicado por 2 */

const multArray = nums => nums.map(num => num * 2);
console.log("Lista de números doblados: ");
console.log(multArray(randomNums));

/** Devuelve el producto de varios números */

const calcMult = (...nums) => nums.reduce((acc, num) => acc * num, 1);
console.log("Multiplicación: " + calcMult(1, 2, 3, 4, 5));


// EXTRAS

/** Cambia el primer elemento del array por el segundo */

const swapFirstSecond = (array) => {
    const [first, second, ...restElements] = array;
    const newArray = second + "," + first + "," + restElements;
    return newArray;
};
console.log("1º nombre en 2º lugar: " + swapFirstSecond(names))

/** Compara si todos los strings empiezan por el mismo caracter */

const firstEqual = (character, ...strings) => strings.every(string => string.startsWith(character));

console.log("¿Empiezan por A? " + firstEqual("A", "Antonio", "Alberto", "Ana", "Camelia"));
console.log("¿Empiezan por A? " + firstEqual("A", "Antonio", "Alberto", "Ana", "Amelia"));


const seasons = ["Spring", "Summer", "Autumn", "Winter"];

/** Compara los strings y devuelve el más largo*/

const longest = (...arrays) => {
    arrays.sort((a, b) => (a.length < b.length ? 1 : -1))
    const [first] = arrays;
    return first;
};

console.log("Lista más larga: ");
console.log(longest(names, randomNums, seasons));

/** Cuántas veces aparece un caracter en un string */

const searchInStringV1 = (word, character) => Array.from(word)
    .filter(char => char === character ? 1 : 0)
    .reduce((acc, char) => acc + char.length, 0);
console.log("¿Cuántas veces aparece la a en javascript? " + searchInStringV1("javascript", "a"));

/** Cuántas veces aparece un caracter en un string sin usar reduce */

const searchInStringV2 = (word, character) => {
    const result = Array.from(word).filter(char => char === character ? 1 : 0);
    return result.length;
}
console.log("¿Cuántas veces aparece la a en Zaragoza? " + searchInStringV2("Zaragoza", "a"));

/** Devuelve un string ordenado alfabéticamente */

const sortCharacters = string => Array.from(string).sort().join(" ");
console.log("Ordenado alfabéticamente: " + sortCharacters("javascript"));

/** Devuelve palabras en mayúsculas y con exclamaciones*/

const shout = (...words) => words.map(word => "¡" + word.toUpperCase() + "!").join(" ");
console.log("Mayúsculas y exclamaciones: " + shout("Antonio", "Fernando", "Ana", "Pedro"));


console.log("LISTA DE LA COMPRA ORDENADA + IVA: ");

const shoppingCart = [{
    category: "Frutas y Verduras",
    product: "Lechuga",
    price: 0.8,
    units: 1
},
{
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2
},
{
    category: "Droguería",
    product: "Gel ducha",
    price: 1.15,
    units: 1
},
{
    category: "Droguería",
    product: "Papel cocina",
    price: 0.9,
    units: 3
},
{
    category: "Frutas y Verduras",
    product: "Sandía",
    price: 4.65,
    units: 1
},
{
    category: "Frutas y Verduras",
    product: "Puerro",
    price: 4.65,
    units: 2
},
{
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2
},
];

/** Dada la siguiente lista:
 *  - Nueva lista a la que se añade el 21% de IVA.
 *  - Ordenarla de más a menos unidades */

const addIVA = cart => cart
    .map(item => ({ ...item, IVA: parseFloat((item.price * 0.21).toFixed(2)) }))
    .sort((a, b) => a.units < b.units ? 1 : -1)

console.log(addIVA(shoppingCart));

const cartWithIVA = addIVA(shoppingCart);

/**  - Total gastado en droguería */

const addDrugs = cart => {
    const subtotal = cart.reduce((acc, item) => item.category === "Droguería" ? acc + item.price + item.IVA : acc, 0);
    return subtotal.toFixed(2);
}
console.log("Subtotal Droguería: " + addDrugs(cartWithIVA) + " €");
console.log("------------------------------------------------");

/**  - Imprimir en consola "Producto -> Precio Total €" y ordenada por categorías */

const printShoppingCart = cart => cart
    .sort((a, b) => a.category > b.category ? 1 : -1)
    .forEach(item => console.log(item.product + " -> " + parseFloat(item.price + item.IVA).toFixed(2) + " €"));

console.log("PRODUCTO -> PRECIO + IVA €");
printShoppingCart(cartWithIVA);






