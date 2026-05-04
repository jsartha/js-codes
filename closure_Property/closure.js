
//   let balance  jar apan  global lihil ast tar te kadi pan change karta al ast  manun apan function madhe lihil te private asel 
function createBankaccount(){

    let balance=600;


    //let user={
         return{

        deposite:function(amount){

         if (typeof amount==="number" && amount>0) {
            
            balance+=amount                           // balance la access karel karen he closure ahe te te chya agodhar cha create jhalele function  remaind ast 
            return balance
         }



        } ,

        withdraw:function(amount){
            
            if (amount==="number" && amount>0 && balance>=amount) {
                
                balance-=amount

                return balance
            }
 
        }  ,



        getBalance: function(){

            return balance
        }

    
    }

    return user
}


const customer=createBankaccount();


//console.log(customer.deposite(8888));
console.log(customer.getBalance());




