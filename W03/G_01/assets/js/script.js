//esercizio 1
var l1 = 2;
var l2 = 5;

area();
function area(l1, l2) {
    let A
    A = (l1 * l2);
    return A;
}
console.log("es1 " + area(l1, l2));

//esercizio 2
let k = 5
let j = 5
function crazySum(k, j) {
    let sum = k + j;
    if (k == j) { sum = 3 * sum };
    return sum;
}
console.log("es2 " + crazySum(k, j));

//esercio 3
let j2 = 30
function crazyDiff(j2) {
    let absDiff = Math.abs(19 - j2)
    if (j2 > 19) {
        absDiff = (absDiff) * 3
    }
    return absDiff;
}
console.log("es3 " + crazyDiff(j2))

//esercizio 4
let ni = 20;

function boundary(ni) {
    let boundflag = false;
    if (ni >= 20 && ni <= 100 || ni == 400) {
        boundflag = true
    };
    return boundflag;
};
console.log("es4 " + boundary(ni));

//esercizio 6
let m37 = 28;
function check3and7(m37) {
    Math.abs(m37);
    let stato = false;
    if (m37 % 3 == 0 || m37 % 7 == 0) {
        stato = true;
    }
    return stato;
}
console.log("es6 " + check3and7(m37))

//esercizio 10
let n = 25;
function giveMeRandom(n) {
    let array1 = Array(n)
        .fill()
        .map(() => Math.floor(10 * Math.random()));
    return array1;
}
console.log("es10 " + giveMeRandom(n));

//esercizio 2 extra
const shoppingCart = [{
    price: 500,
    name: "borsa",
    id: "01",
    quantity: 2
},
{
    price: 200,
    name: "scarpe",
    id: "02",
    quantity: 2,
}
]

function shoppingCartTotal(shoppingCart) {
    let total = 0
    for (let i = 0; i <= shoppingCart.length - 1; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantity
    }
    return total
}
console.log("es2 extra " + shoppingCartTotal(shoppingCart))

//esercizio extra 3 (vorrei implementare l-inserimento dati da html)
function addToShoppingCart(shoppingCart) {
    shoppingCart.push({
        price: 150,
        name: "scrivania",
        id: "03",
        quantity: 1
    },)
    shoppingCart.push({
        price: 150,
        name: "sedia",
        id: "04",
        quantity: 2
    })
    return shoppingCart;
}

console.log("es3 extra ")
console.log(addToShoppingCart(shoppingCart))

//esercizio extra 4
function maxShoppingCart() {
    let max = 0
    let proMaxPrice = "";
    for (let i = 0; i <= shoppingCart.length - 1; i++) {
        let price = shoppingCart[i].price;
        let name = shoppingCart[i].name;
        if (price > max) { max = price; proMaxPrice = name }
    }
    return " es4 extra " + max + " euro a facc ro cazz' per una " + proMaxPrice;
}
console.log(maxShoppingCart(shoppingCart))

//esercizio extra 5
function latestShoppingCart() {
    let latest = shoppingCart.pop()
    return latest;
}
console.log("es5 extra ")
console.log(latestShoppingCart(shoppingCart))

/*esercizio extra 6
let x = 4

function loopUntil(x) {
    let n = 0;
    let t = 0;
    let triple = false;
    
    while (triple == false) {
        if (t==3){triple=true}
        n=Math.floor(Math.random()*10)
        console.log(n)
        if (n>x){t+=1}
        else {t=0}

        

    }
}
loopUntil(x)*/
