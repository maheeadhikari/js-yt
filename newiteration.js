// for 

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (element == 7){ 
        //console.log("7 is best number");
    }
    //console.log(element);

}  
 //console.log(element) is not defined outside 

 for (let i = 0; i <= 10; i++) {
    //console.log(`Outer Loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner Loop value: ${j} and inner loop ${i}`)
       // console.log(i + '*' + j + '=' + i*j );
    }
    
 }
 let myArray = ["flash", "batsman", "superman"]

 for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
 }


 //    break and continue 

 //for (let index = 1; index <= 20; index++) {
    
   // if(index == 7){
     //   console.log(`Detected 7`);
       // break         broken
    // }
    
   //  console.log(`Value of i is ${index}`);

    
 // }

 for (let index = 1; index <= 20; index++) {
    
    if(index == 7){
        console.log(`Detected 7`);
        continue                  // once u are ignored
    }
    
    console.log(`Value of i is ${index}`);

    
 }

