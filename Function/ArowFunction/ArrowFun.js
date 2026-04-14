const  chai=()=>{


    console.log('hi arrow');
    
}

chai()

// Example 2
const chior=()=>{

    console.log(this);
    
}

chior()



// Example 3

const addTwo=(num , num2)=>{

    return  num+num2
}

console.log(addTwo(66,66));
