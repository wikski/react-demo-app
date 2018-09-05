import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'

// layout components
import Header from './components/layout/header'
import Sidebar from './components/layout/sidebar'
import Breadcrumbs from './components/breadcrumbs'
import Notifications from './components/notifications'

// hoc
import FormWrapper from './components/formWrapper'

// routes
import About from './components/about'
import Dashboard from './components/dashboard/index'
//import Error404 from './components/error/404'
import User from './components/users/user.container'
import UsersContainer from './components/users/users.container'

const StyledArticle = styled.article`
    padding: 100px 20px 0 260px;
`

class App extends React.Component {
    
    render(){

        const FormUser = FormWrapper(User)

        return (
            <div>
                <Header/>
                <Sidebar/>     
                <Breadcrumbs/>           
                <StyledArticle>                    
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>                        
                        <Route exact path='/users' component={UsersContainer}/>
                        <Route exact path="/users/:userId" component={FormUser}/>
                        <Route exact path="/create-user" component={FormUser}/>
                        <Route exact path='/about' component={About}/>                        
                    </Switch>
                </StyledArticle>
                <Notifications errors={this.props.errors}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        errors: state.errors
    }
}

export default withRouter(connect(mapStateToProps, null)(App))