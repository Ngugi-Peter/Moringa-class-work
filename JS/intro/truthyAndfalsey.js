let userName="John Maina"
let username2=""
let activeuser=username2 || userName
console.log(`activeuser=${activeuser} 
    it is of type ${typeof activeuser}`);

    let activeuser2=username2 && userName
console.log(`activeuser2=${activeuser2} 
    it is of type ${typeof activeuser2}`);