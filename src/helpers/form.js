function getRecursiveValue(fields, i){
    // used to extract form values within nested objects
    
    if(fields[i].hasOwnProperty('value')){
        
        return fields[i] = fields[i].value
    }

    for(const ii in fields[i]){
        
        getRecursiveValue(fields[i], ii)
    }
}

export function parseValues(fields){
        
    for(const i in fields){
        
        getRecursiveValue(fields, i)
    }

    return fields
 }

