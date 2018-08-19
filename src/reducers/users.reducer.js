const initialState = {
    users: {
        info: {},
        results: [],
    }
}

const users = (state = initialState, action) => {
    
    switch (action.type){
        
        case 'FETCH_USERS':
            return Object.assign(state.users, action.response.data)

        default: 
            return state
    }
}

export default users