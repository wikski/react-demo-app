import React from 'react'
import { connect } from 'react-redux'

import { fetchAllUsers } from './../../actions/users.action'
import UsersList from './usersList'

class UsersRead extends React.Component {

    constructor(props){
        super(props)

        this.props.fetchUsers()        
    }

    render(){       
        return (
            <section>
                <h2>Users</h2>
                <UsersList history={this.props.history} users={this.props.users}/>
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        users: state.users
    }
}
const mapDispatchToProps = dispatch => {    
    return {
        fetchUsers: () => dispatch(fetchAllUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersRead)