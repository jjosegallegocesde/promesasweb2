let princesa="";

function buscarPrincesa(){
    
    let promesa= new Promise(function(resolve,reject){

        console.log("buscando...")

        setTimeout(function(){
            princesa="Encontre a blanca nieves";
            if(princesa.length>0){

                resolve(princesa);
    
            }else{
    
                reject("no encontre nada");
    
            }
        },3000)

       


    })


   
    return promesa;
}

buscarPrincesa()
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(error){
    console.log(error)
})
