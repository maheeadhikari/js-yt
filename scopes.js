//    var c = 300   global scope

let a = 900

if (true){
    let a = 10
    const b = 20
    // var c = 30
    //console.log("INNER: ", a)

}   //block scope                                           //scope - {} comes with function and if - else statements

// for (let i = 0; i < array.length; i++){
//    const element = array[i];
//  }
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "mahee";

    function two(){
        const website = "youtube";
        //console.log(website); 
    }
        //console.log(username);
    two();
}

one();

if (true){
        const username = "mahee"
        if (username === "mahee"){
            const website = " youtube"
            //console.log(username + website);

        }
        //console.log(website); 
}

//console.log(username);

// +++++++++++++++++intresting+++++++++++++++++

console.log(addone(5))
function addone(num){                // its a basic function 
        return num+1
}


const addTwo = function(num){        //sometimes its call expression
    return num + 2
}

addTwo(5)
