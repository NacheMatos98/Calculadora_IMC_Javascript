
const calcular = document.getElementById('calcular');


function imc(){

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura*altura)).toFixed(1);

        let classi = '';

        if(valorIMC < 18.5){
            classi = 'abaixo do peso.';
        }
        else if(valorIMC < 25){
            classi = 'com peso ideal. Parabéns!';
        }
        else if(valorIMC < 30){
            classi = 'levemente acima do peso.';
        }
        else if(valorIMC < 35){
            classi = 'com obesidade grau I.';
        }
        else if(valorIMC < 40){
            classi = 'com obesidade grau II.';
        }
        else{
            classi = 'com obesidade grau III. CUIDADO!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classi}`;
        


    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }
    
}

calcular.addEventListener('click', imc);


