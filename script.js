function checkDataType(a){
    if ( a === null || a===undefined)
    {
        return "Enter a Value";
    }
    if(Array.isArray(a))
    {
        return "It's array"
    }
    return typeof a
    }
    a=["q","3",3];
    console.log(checkDataType(a));