let up = document.querySelector(".previous-display");

let down = document.querySelector(".current-display");

let container = document.querySelector(".buttons-container");
let currentOperent = ""
let yanlıs = false
let previousOperant =""
let operation =""

//? *****query-selector seçme işlemleri ****

container.addEventListener("click", (a)=>{
    if(a.target.classList.contains("num")){
        tuşlar(a.target.innerText);
        displayYenile()
    }

    if(a.target.classList.contains("operator")){
        operatorunuSec(a.target.textContent)
        displayYenile();
    }

    if (a.target.classList.contains("equal")) {
        calculate();
        displayYenile();
        yanlıs = true ;
    }

    if (a.target.classList.contains("ac")) {
        currentOperent = "";
        previousOperant = "";
        operation = "";
        displayYenile();
        
    }

    if (a.target.classList.contains("ae")) {
        if(!currentOperent){return}
        currentOperent *= -1 ;
        displayYenile();

    }

    if (a.target.classList.contains("percent")) {
        if(!currentOperent){return}
        currentOperent = currentOperent / 100 ;
        displayYenile();
        yanlıs = true
    }
    
})
//? *********if'ler*********************
const tuşlar = (num)=>{
    if(currentOperent === "0" && num ==="0"){
        return 
    }
    if(currentOperent === "0" && num !=="."){
        currentOperent = num 
        return
    }
    if(num === "." && currentOperent.includes(".")){
        return
    }
    if(currentOperent.length > 10){
        return
    }
    if(yanlıs){
        currentOperent = num ;
        yanlıs = false
        return
    }
    currentOperent += num
}
//? ******** tuşların fonksiyonu *********

const displayYenile = ()=>{

    if(currentOperent.toString().length > 11){
currentOperent = Number(currentOperent).toExponential(3)
}
 down.textContent = currentOperent;
 if(operation && previousOperant ){
    up.textContent = `${previousOperant} ${operation}`
 }else{
    up.textContent =""
 }
}
//? *******sonuc 11 den uzunsa e hatası ver*******

const operatorunuSec = (op)=>{
    if(previousOperant){
        calculate()
    }
    operation = op ;
    previousOperant = currentOperent ;
    currentOperent = "" ;
}

//? ******operatorunu secc********

const calculate = ()=>{
    let sayac = 0 ;
    const prev = Number(previousOperant) ;

    const current = Number(currentOperent);

    switch (operation) {
      case "+":
        sayac = prev + current;
        break;

      case "-":
        sayac = prev - current;
        break;

      case "x":
        sayac = prev * current;
        break;

      case "÷":
        sayac = prev / current;
        break;

      default: return 
        
    }

    currentOperent = sayac ;
    previousOperant ="" ;
    operation ="";

}
//? ********arti-eksi/switch-case********