var num1 ='';
var num2 = '';
var op = false;
var operatore = "";
var risultato='';


//cancella
document.getElementById("reset").addEventListener("click", function () {
    cancella()
    document.getElementById("schermo").innerHTML = '';
})

//operatore
document.getElementById("divisione").addEventListener("click", function () {
    operatore = "/";
    fact();
});
document.getElementById("moltiplicazione").addEventListener("click", function () {
    operatore = "*";
    fact();
});
document.getElementById("addizione").addEventListener("click", function () {
    operatore = "+";
    fact();
});
document.getElementById("sottrazione").addEventListener("click", function () {
    operatore = "-";
    fact();
});

//num1 num2
document.getElementById("7").addEventListener("click", function () {
    n = "7";
    n1or2(op, n);
});
document.getElementById("8").addEventListener("click", function () {
    n = "8";
    n1or2(op, n);
});
document.getElementById("9").addEventListener("click", function () {
    n = "9";
    n1or2(op, n);
});
document.getElementById("6").addEventListener("click", function () {
    n = "6";
    n1or2(op, n);
});
document.getElementById("5").addEventListener("click", function () {
    n = "5";
    n1or2(op, n);
});
document.getElementById("4").addEventListener("click", function () {
    n = "4";
    n1or2(op, n);
});
document.getElementById("3").addEventListener("click", function () {
    n = "3";
    n1or2(op, n);
});
document.getElementById("2").addEventListener("click", function () {
    n = "2";
    n1or2(op, n);
});
document.getElementById("1").addEventListener("click", function () {
    n = "1";
    n1or2(op, n);
});
document.getElementById("0").addEventListener("click", function () {
    n = "0",
        n1or2(op, n);
});
document.getElementById(".").addEventListener("click", function () {
    n = "."
    n1or2(op, n);
});

//operazione
document.getElementById("uguale").addEventListener("click", function () {
    calcola();
    document.getElementById("schermo").innerHTML = risultato;
    cancella()
});

//schermo e op(flag)
function fact() {
    document.getElementById("schermo").innerHTML = '';
    op = true;
};

//scelta write in num1 o num2, over range
function n1or2(op, n) {
    if (op == false) {
        if (num1.length >= 18) {
            document.getElementById("schermo").innerHTML = "over range"
        }
        else {
            num1 += n;
            document.getElementById("schermo").innerHTML = num1;
        }
    } else {
        if (num1.length >= 18) {
            document.getElementById("schermo").innerHTML = "over range"
        }
        else {
            num2 += n;
            document.getElementById("schermo").innerHTML = num2
        }
    }
};

//calcola
function calcola() {
    let a = Number(num1);
    let b = Number(num2);
    switch (operatore) {
        case '+':
            risultato = a + b;            
            break;
        case '-':
            risultato = a - b;            
            break;
        case '*':
            risultato = a * b;            
            break;
        case '/':
            risultato = a / b;            
            break;
        default:
            risultato = "error";
            break;
    }
};

//cancella
function cancella() {
    num1 = '';
    num2 = '';
    op = false;
    operatore = "";
    risultato = ""
    return num1, num2, op, operatore, risultato;
};




//button di verifica per i consol log
/*document.getElementById("verifica").addEventListener("click", function () {
    console.log(operatore)
    console.log(num1)
    console.log(num2)
    console.log(op)
    console.log(risultato.length)
})*/