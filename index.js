var sortMeglobal; //define esta variable global para luego usarla en la otra funcion.
var arrayLengthglobal;
function processFormData() {
    var arrayLength = document.getElementById("fnumber").value;  
     var sortMe = new Array();
     var i = 0;
     for(; i < arrayLength; i++) {
        sortMe[i] = Math.floor((Math.random()*13)+1);
        let symbolarray = ["&diams;", "&spades;", "&hearts;", "&clubs;"];
        var randomsymbol = Math.floor(Math.random() * symbolarray.length);
        symbol1 = symbolarray[randomsymbol]; 
        let card = document.createElement("div");
        card.classList.add("card");
        let p = document.createElement("span");
        p.innerHTML = symbol1;
        let n = document.createElement("span");
        n.innerHTML = sortMe[i];
        card.appendChild(p);
        card.appendChild(n);
        container.appendChild(card);
     } 
     
     
     console.log(sortMe) 
      sortMeglobal = sortMe;
      arrayLengthglobal = arrayLength;
}

 function processFormData1() {
 let sortMe1 = sortMeglobal;
// const selectSort = (sortMeglobal) => {
     let min = 0;
     while (min < sortMe1.length-1){
         for(let i = min+1; i < sortMe1.length-1; i++) {
           if (sortMe1[min] > sortMe1[i]) {
             let aux = sortMe1[min];
             sortMe1[min] = sortMe1[i];
             sortMe1[i] = aux;
           }
         }
         min++;
       console.log(sortMe1);
     }
 };

