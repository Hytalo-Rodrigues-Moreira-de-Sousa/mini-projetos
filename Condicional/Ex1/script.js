function verificar(){
    let a = document.getElementById('na');
    let b = document.getElementById('nb');
    let c = document.getElementById('nc');
    let res = document.getElementById('res');
    
    if(a + b < c){
        res.innerHTML = `A soma de ${a} + ${b} é menor que ${c}`;
    }
    else if(a + b > c){
        res.innerHTML = `A soma de ${a} + ${b} não é menor que ${c}`;
    }
    else{
        res.innerHTML = `A soma de ${a} + ${b} é igual a ${c}`;
    }
}