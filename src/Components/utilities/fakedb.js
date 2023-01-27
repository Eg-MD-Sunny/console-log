//===>>>Use Local Storage to manage cart data

const addToDb = (_id) =>{
    const quantity = localStorage.getItem(_id);
    if(quantity){
        console.log('Already Added this Product')
        const newQty = parseInt(quantity) + 1;
        localStorage.setItem(_id,newQty);
        
    }else{
        console.log('New Item Adde')
        localStorage.setItem([_id],1);
    }
}
export { addToDb };

