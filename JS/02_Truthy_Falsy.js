// Truty - Falsy

if(""){
    console.log('Truthy: String vacio');
}else{
    console.log('False: String vacio');
}

if('Ander'){
    console.log('Truthy: String con datos');
}else{
    console.log('Falsy: String vacío');
}

if(0){
    console.log('Cero es truthy');
}else{
    console.log('Cero es falsy');
}

if(1){
    console.log('Positivo: Es truthy');
}else{
    console.log('Positivo: Es falso');
}

if(null){
    console.log('Null es truthy');
}else{
    console.log('Null es falsy');
}

if(undefined){
    console.log('Undefined es truthy');
}else{
    console.log('Undefined es falsy');
}