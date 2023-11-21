function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction(){
    let rFunc = () => "candy";
    return(rFunc)
}

function returnsAnAnonymousFunction(){
    return( (num) => num*2);
}