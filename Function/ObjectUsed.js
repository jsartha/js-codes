
const User={


    usernamae:"sarthak",
    price:10290
}


function handleObject(objectdata){

    console.log(` Username i s ${objectdata.usernamae}  and price i s ${objectdata.price} `);

    return
    
}

handleObject(User)

// direct Object used


handleObject(
    {
        usernamae:"joshi" ,
        price: 99999
    }
)