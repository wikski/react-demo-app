import { combineReducers } from 'redux'

import { errors } from './errors.reducer'
import { users } from './users.reducer'

export default combineReducers({
    errors,
    users,
})