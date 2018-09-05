export const errorCreate = bool => ({
    type: 'ERROR_CREATE',
    bool,    
})

export const errorRead = bool => ({
    type: 'ERROR_READ',
    bool,
})

export const errorUpdate = bool => ({
    type: 'ERROR_UPDATE',
    bool,
})

export const errorDelete = bool => ({
    type: 'ERROR_DELETE',
    bool,
})