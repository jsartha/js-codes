
const user={

    username:"Sakshi" ,
    price:743983 ,


    welcomeMessageFunction: function(){


        console.log(`${this.username} welcome to the website`);
        
        // console.log(this);  corrunt value show
        
    }
}

user.welcomeMessageFunction()

user.username="sarthak"

user.welcomeMessageFunction()

//console.log(this);  emty object used


function chai(){

    console.log(this);
    

}

chai()