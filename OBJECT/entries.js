const  user={

    name:"sarthak" ,

    amount:9039,

    emial:"jsarthak@gmail.com"

}
console.log (Object.entries(user))



// loop

for( let num  in user){
    console.log(num , user[num]);
    
}