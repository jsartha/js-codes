

const  user={

    name:"sarthak" ,

    amount:9039,

    emial:"jsarthak@gmail.com" ,

    greeting: function() {
        
        console.log(' hi');
        
     }

}

user.greeting()

const { name:username , amount:total_amount}=user


//console.log(name , amount);


console.log(username , total_amount);




//  array 


let a=[1,2,3,454,6578,9,0]


let [first , second]=a

console.log(first , second);


// for of 


for( const keys of Object.entries(user) ){

    console.log(keys);
    
}



for( const [keys ,values] of Object.entries(user) ){

    console.log(keys , values);
    
}



/// nested loop


const  user1={

    name:"sarthak" ,

    amount:9039,

    emial:"jsarthak@gmail.com" ,

    // greeting: function() {
        
    //     console.log(' hi');
        
    //  }
        

    user2:{

    name:"sarthak" ,

    amount:9039,

    emial:"jsarthak@gmail.com" 

         ,

        0:"sarthak" ,            /// array create 
        
         
        1:"joshi"


}
}

console.log(user1[0]);



console.log(user1.user2.amount);

//shallow copy
//const user11={...user1}

/*
user11.amount=9900

console.log(user11);


console.log(user1);

*/
//jar apan as kel tar fact parent value var effct nahi honar chiled var hoyil


// Tya sathi 
// DEEp  value consept


const user123=structuredClone(user1) ;

user123.user2.emial="urgjg"
console.log(user123);

console.log(user1);



