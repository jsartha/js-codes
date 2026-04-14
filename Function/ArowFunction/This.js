const { use } = require("react");

const user={

    username:"Sakshi" ,
    price:743983 ,


    welcomeMessageFunction: function(){


        console.log(`${this.username} welcome to the website`);
        
    }
}

user.welcomeMessageFunction()

user.username="sarthak"

user.welcomeMessageFunction()