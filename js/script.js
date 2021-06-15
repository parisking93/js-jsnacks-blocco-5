// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var oggetti = [
    {
        nome : 'mountain',
        peso : 2
    },
    {
        nome : 'cicla',
        peso : 3
    },
    {
        nome : 'south',
        peso : 2
    },
    {
        nome : 'bo',
        peso : 7
    }
];
// assegno il primo elemento di oggetti
var biciPesoMin = [oggetti[0]];

// ciclo tutti gli elementi di oggetti meno il primo 
for (var i = 1; i < oggetti.length; i++) {
    if (oggetti[i].peso == biciPesoMin[0].peso) {
        biciPesoMin.push(oggetti[i]);
    } else if (oggetti[i].peso < biciPesoMin[0].peso) {
        biciPesoMin[0] = oggetti[i];
    }
}
// controllo se ha un elemento o piu e stampo di conseguenza 
if (biciPesoMin.length < 1) {
    console.log(biciPesoMin.nome + ':  ' + biciPesoMin.peso + 'kg');
} else {
    for (var i = 0; i < biciPesoMin.length;i++) {
        console.log(biciPesoMin[i].nome + ':  ' + biciPesoMin[i].peso + 'kg');
    }
}


// 2 script 
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti

var squadre = [
    {
        nome : 'juve',
        punti : 0,
        falli : 0
    },
    {
        nome : 'milan',
        punti : 0,
        falli : 0
    },
    {
        nome : 'inter',
        punti : 0,
        falli : 0
    }
];

for (var i = 0; i < squadre.length; i++) {
    squadre[i].punti = rand(1,5);
    squadre[i].falli = rand(1,100);
}

for(var i = 0; i < squadre.length; i++) {
    console.log('nome: ' + squadre[i].nome + ', punti: ' + squadre[i].punti + ', falli fatti: ' + squadre[i].falli);
}





function rand(min,max) {
    var nRandom = Math.floor((Math.random() * ((max + 1) - min) + min))
    return nRandom
}