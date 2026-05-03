

// Example 1  --------> Spread 



const arr1=[1,2,3,45,6,89,0]

const arr2=[4433,677,454,'sarthak']
                                          // value cacha karto


const total=[...arr1 , ...arr2]

console.log(total);



//Example fun 2
function add(){


    console.log(" hi adder ");
    
}


add()



// Example Rest 3 


function  greeting(...data){


    return data

}


console.log(greeting("hi good morning"));


console.log(greeting("hi good Afternoon "));


console.log(greeting("hi good ninght"));



//Add Eample  4


function adddata(...data){

       let Sum=0;

    for( let num of data){

         Sum+=num
    }
    
    console.log(Sum);
    
}



adddata(23,44,666,7777,44,66)
adddata(10 ,20)


// Example  Function Expression 



const  addNumber= function(){


    console.log("hi");
    
}

addNumber()



// Example 5

const addNumber1=(num , num2)=> num+num2 ;

console.log(addNumber1(90 ,89))
                                                                                                                                                  

//Example 6

// single parameter used only 
const Squre=num => num*num ;

console.log(Squre(8));


// Example 7


const greeting1=()=>{


    return   {


        name:"sarthak"  ,

        number:93940837938 ,

        date:"1310200"
    }
}

console.log(greeting1());



//Example 8


const greeting2=()=>  ( { name:"sarthak" , lastName:"joshi" , number:982737737} )


console.log(greeting2());


//Example 9  IIFE()



(
function greeting11() {

    console.log("hi iife");
    
    
} )() ;



(
    ()=> console.log("hi")
    
) ();




// Example 10   callback function


function greet(){

    console.log("hellow kaise hai aap lok");
    
}


function dance(){


    console.log("i am dancing");
    
}

function meet(callback){


    console.log("i am going to meet sumone");
    callback()

    console.log("meeting complete");
    
}

//meet(greet())

meet(greet)
meet(dance)


// zomato

// blinkit


function blinkit(){


    console.log(`Packaging your order on your locaton`);
    
}

function zomato(){


    console.log(`order processing on your location`);
    
}


function Payment(amount , callback) {


    console.log(` ${amount} processing money`);
    
    console.log(` Payment successfull`);
        callback()
    
    // zomato()
    // blinkit()
     
}




Payment(500 , zomato)

Payment(400 , blinkit)