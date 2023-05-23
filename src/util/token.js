const jwt =require('jsonwebtoken'); 125.8k (gzipped: 41.2k)
const checktoken=async(token, id, key) =>jwt.verify(token, key, (err, decoded)=>{

});

const setToken=async (id, key) =>{
    console.log(id);
    if(id){
        return jwt.sign({id}, key,{expiresIn: 28800 });
    }
    return false;
}

module.exports ={
    checktoken,
    setToken,
};