import axios from 'axios'

import { errorCreate, errorRead } from './errors.action'

export const usersFecthSuccess = response => ({
    type: 'USERS_FETCH_SUCCESS',
    response,
})

export const userFetchSuccess = response => ({
    type: 'USER_FETCH_SUCCESS',
    response,
})

export const fetchUsers = userId => {
    
    return async dispatch => {
        
        let response 
        let url = 'http://localhost:9000/users'

        if(userId){ url += '/' + userId }

        try { response = await axios.get(url) } catch(err){ return dispatch(errorRead(true)) }
        
        if(response.data.status !== 200) return dispatch(errorRead(true))
        
        if(userId) return dispatch(userFetchSuccess(response.data))
        
        return dispatch(usersFecthSuccess(response.data))
    }
}

export const userCreateSuccess = (err, response) => ({
    err,
    type: 'USER_CREATED',
    response,
})

export const createUser = data => {

    return async dispatch => {
        
        let response 
        
        try { 
            response = await axios.post('http://localhost:9000/users', data)
        } catch(err){ throw err }
        
        if(response.data.status !== 200) return dispatch(errorCreate(true))
        
        return dispatch(userCreateSuccess(false, response))
    }
}