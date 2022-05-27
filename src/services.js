

export function semaforo(cor){
    
    let x = "";

    if (cor == "vermelho"  ){

        x = 'Aguarde!'
    }

    else if (cor == "Verde"  ){

        x = "Pode passar!"
    }

    else {

        x = 'Inválido!'
    }

    return x;
}

export function DiaSemana(dia){

    let x = "";

    if (dia == 0  ){

        x = 'Domingo'
    }

    else if (dia == 1  ){

        x = 'Segunda-Feira'
    }

    else if (dia == 2  ){

        x = 'Terça-Feira'
    }

    else if (dia == 3  ){

        x = 'Quarta-Feira'
    }

    else if (dia == 4  ){

        x = 'Quinta-Feira'
    }

    else if (dia == 5  ){

        x = 'Sexta-Feira'
    }

    else if (dia == 6  ){

        x = 'Sábado'
    }

    return x;
}

export function fatorial(n) {
    let x = 1
    for(let i = n ; n > 1 ; n--){
        x *= n
    }
    return x;
}

export function seq(n){
    let x = [];
    let e = 0;
    for(let i = 0; e < n; i+=2){
        x[e] = i
        e++
    }
    return x
}
