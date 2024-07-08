// Immediately Invoked Function Expression (IIFE)


(function coffee (){
    console.log(`DB CONNECTED`);

})();

// there is a problem due to pollution of global scope. Many times , we have thrown it to remove the pollution of the variables of global scope, whateverdeclaration is so, to remove that pollution we use iife.
( function aurcode () {
    console.log(`DB CONNETED TWO`)
} )();

( () => {
    console.log(`DB CONNECTED THREE`);
}) ();

((name) => {
    console.log(`DB CONNECTED FOUR ${name}`);
} ) ('Mahee')