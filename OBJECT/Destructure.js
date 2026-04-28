const  user={

    name:"sarthak" ,

    amount:9039,

    emial:"jsarthak@gmail.com"

}

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