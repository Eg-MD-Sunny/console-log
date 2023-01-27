//===>>>Use Local Storage to manage cart data
const addToDb = (_id,price) =>{
    localStorage.setItem([_id,price],1);
}


export { addToDb };

