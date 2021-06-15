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
  