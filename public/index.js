function insert(num){
   let numero = document.querySelector("#resultado").innerHTML;

   document.querySelector("#resultado").innerHTML = numero + num;
}

function limpar() {
    document.querySelector("#resultado").textContent = ""

}

function apagar(){
    let resultado =  document.querySelector("#resultado").innerHTML;

    document.querySelector("#resultado").textContent =resultado.substring(0, resultado.length -1)
}


function calcular(){
    let resultado =  document.querySelector("#resultado").innerHTML;

    if(resultado){
        document.querySelector("#resultado").innerHTML = eval(resultado)
    }else{
        document.querySelector("#resultado").innerHTML = "não existe uma expressão!"
    }
}




