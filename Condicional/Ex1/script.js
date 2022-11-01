function verificar(){
    let a = document.getElementById('txta')
    let b = document.getElementById('txtb')
    let c = document.getElementById('txtc')

    if(a.value.length == 0 && b.value.length == 0 && c.value.length == 0){
        window.alert('Digite um valor para prosseguir')
    }
    else{
        res.innerHTML = 'Verificando...: '
        let n1 = Number(a.value)
        let n2 = Number(b.value)
        let n3 = Number(c.value)
    }
    res.innerHTML = ''
    if(a + b < c){
        res.innerHTML += (`A soma de ${n1} + ${n2} é maior que ${n3}`)
    }
    else{
        res.innerHTML += (`A soma de ${n1} + ${n2} não é maior que ${n3}`)
    }
}