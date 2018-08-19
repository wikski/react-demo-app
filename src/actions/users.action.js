import axios from 'axios'

export const users = response => ({
    type: 'FETCH_USERS',
    response,
})

export const fetchAllUsers = () => {
    
    return async dispatch => {
        
        let response 
        
        try { 
            response = await axios.get('https://randomuser.me/api?results=30')
        } catch(err){ throw err }
        
        if(!response) return 'hey'
        
        return dispatch(users(response))
    }
}