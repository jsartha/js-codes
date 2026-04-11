tinderUser=new Object() 


tinderUser.name='sarthak';

tinderUser.isLoggin=true
tinderUser.id=1234


console.log(tinderUser);




tinderUser.Greeg=function(){

    console.log(this.name , "good afternoon");
    
}

console.log(tinderUser.Greeg());







const regularUser={


    email:"sarthak",
    Fullname:{
      
         firstName:"sarthak",
         lastname:"joshi"

    }
}


console.log(regularUser.Fullname.firstName);

// imp jar Bydfault Error ala atar  ? value betli ye tar ghe 

console.log(regularUser.regularUser.Fullname?.firstName.lastname);



