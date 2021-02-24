function imc() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebendodados(e) {
        e.preventDefault();
        let peso = '';
        let altura = '';
        peso = Number(document.getElementById('peso').value);
        altura = Number(document.getElementById('altura').value);
        const imc = peso / (altura ** 2);

        //Verificando o nivel do IMC
        function resultadoimc() {
            if (imc < 18.5) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, esta á baixo do peso`
            } else if (imc >= 18.5 && imc <= 24.9) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, seu peso está normal`
            } else if (imc >= 25 && imc <= 29.9) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, está com sobre peso`
            } else if (imc >= 30 && imc < 34.9) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, obesidade grau 1`
            } else if (imc >= 35 && imc <= 39.9) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, obesidade grau 2`
            } else if (imc >= 40) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}, obesidade grau 3`
            } else if (peso !== Number(peso) && altura !== Number(altura)) {
                resultado.innerHTML = `Valores invalidos`
            } else if (peso !== Number(peso)) {
                resultado.innerHTML = `Peso invalido`
            } else if (altura !== Number(altura)) {
                resultado.innerHTML = `Altura invalida`
            } else {
                resultado.innerHTML = `Coloque os valores`
            }

            resultado.classList.add('is-open');

        }
        resultadoimc();
    }

    form.addEventListener('submit', recebendodados);
}

imc();
