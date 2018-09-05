const initialState = {    
    list: [],
    user: {},
}

export const users = (state = initialState, action) => {
    
    switch (action.type){
        
        case 'USERS_FETCH_SUCCESS':            

            return Object.assign({}, state, { list: action.response.data })

        case 'USER_FETCH_SUCCESS':            
            
            return Object.assign({}, state, { user: action.response.data })

        case 'USER_CREATED':

            return state

        default: 

            return state
    }
}