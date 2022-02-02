var EdadFrancisco = 24;
var EdadNicolas = 22;

/*
if (EdadFrancisco > EdadNicolas) {

    var diferenciaEdad = (EdadFrancisco - EdadNicolas);
    console.log(`Francisco es mayor que Nicolas por ${diferenciaEdad} años`);

}
*/
var marca;
var bebida;

function escabiar(plata,bebida) {
    if (plata > 850 && bebida === 'Fernet') {
        marca = 'Branca';
        console.log(`Vamos a comprar ${bebida} marca ${marca}`);
    } else if (plata > 2400 && bebida === 'Vodka') {
        marca = 'Absolut';
        console.log(`Vamos a comprar ${bebida} marca ${marca}`);
    } else if (plata < 2400 && bebida === 'Vodka') {
        marca = 'Smirnoff';
        console.log(`Vamos a comprar ${bebida} marca ${marca}`);
    } else if (plata < 850 && bebida === 'Fernet') {
        marca = 'Vittone';
        console.log(`Vamos a comprar ${bebida} marca ${marca}`);
    } else {
        console.log('No vamos a escabiar un pingo');
    }
}

escabiar(400,'Fernet');