import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { fetchUsers } from './../../actions/users.action'
import UsersList from './usersList.component'

class UsersContainer extends React.Component {

    constructor(props){
        super(props)
                
        this.props.fetchUsers()
    }    

    render(){              
        return (
            <section>
                <h2>Users</h2>
                <Button tag={Link} to="/create-user">Add user</Button>
                <UsersList users={this.props.users}/>                
            </section>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.list
})

const mapDispatchToProps = dispatch => ({    
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)