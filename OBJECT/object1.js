 

 

const mysym=Symbol('key1')
const Loggin={


    name:"sarthak",
    isloggin:true,
    [mysym]:"symbol",
    time:8  
 

}


console.log(Loggin);
console.log(Loggin.name);
console.log(Loggin['name']);


// imp
console.log(typeof Loggin [mysym]);




const aa=Symbol('key1')
console.log( typeof aa);


// changing 

Loggin.name='joshi11'

console.log( Loggin.name);


//Freeze Value
//...> do not change any 


//Object.freeze(Loggin)


Loggin.name="sarthak11"
console.log(Loggin.name);   //...not change name




// Add Function

// EX1
Loggin.Greeting=function(){

    console.log(' hi , good Morning');
    
}

console.log(Loggin.Greeting());


//EX2


Loggin.Greeting2=function(){

    console.log(`${this.name} Good morning`);
    
}


console.log(Loggin.Greeting2());





// Array of Objecct 


const user=[

    {
    
        email:"jsarthak168@gmail.com"

    },


    {


    }
    ,


    {



    }
]


// access element

console.log(user[1].email)







