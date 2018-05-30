
// Javascript External File

   // a JavaScript conditional statement to find the largest of five numbers 
   // no custom function created or inbuilt function - Math.max.apply() used
   // dont want to use longer code with if (condition && condition) else if (conditions)

    let numbres = [7, 10, -2, 15.5, 4];
    let maxNumber = numbres[0];
    for (i=1 ; i < numbres.length; i++){
        if (numbres[i] > maxNumber){
            maxNumber = numbres[i];
        } else {
            maxNumber = maxNumber;
        }
    }
      
    // function numbres(num) {
    //     return Math.max.apply(null, num);
    // }

    console.log("The largest of five numbers is - " + maxNumber);

  