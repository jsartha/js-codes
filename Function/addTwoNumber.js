
//Example 1
function addTwoNumber(){

    return 20+90
}

console.log(addTwoNumber())

addTwoNumber()


//example 2


function twonumber(a ,b){   //Parameter mantat  karan definition  apply kart

    console.log(a+b);
    
    
}


twonumber(201 ,90) // argument 


// Example 3


function Two ( a, b){


   console.log( a+b);
    
}


Two(9,8);




// Example 3

function Two1(a , b){


    let result=a + b

    return result
}


 const result=Two1( 30 ,40)

console.log('myresult' , result)



//Example 4


function loginUser(username){

      if(username===undefined && username===null) {

        console.log( ' please fiil the input');
        return
      }
     return `${username} just loggin`

}

console.log( loginUser());


//Example 5

function loginUser2(username1) {

    if(!username1) {


        console.log('plese fill the username');
     
        return
    }

    return  `${username1} , just loggin two`
    
}


console.log( loginUser2());
