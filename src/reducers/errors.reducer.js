const initialState = {
    create: false,
    read: true,
    update: false,
    delete: false,
}

export const errors = (state = initialState, action) => {

    switch(action.type){

        case 'ERROR_CREATE' :

            return Object.assign(state, { create: action.response.data })
        default: 
            return state
    }
}