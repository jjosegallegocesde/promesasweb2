let princesa="";

function buscarPrincesa(){

    let promesa= new Promise(function(resolve,reject){

        setTimeout(function(){
        
            princesa="Encontre a blanca nieves";
            if(princesa.length>0){
                resolve(princesa);
            }else{
                reject("falle");
            }
    
        },5000)


    })

    
    return promesa;

    
}

buscarPrincesa()
.then(function(resultado){
    console.log(resultado);
})
.catch(function(error){
    console.log(error)
})