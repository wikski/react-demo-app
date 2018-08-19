import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// layout components
import Header from './components/layout/header'
import Sidebar from './components/layout/sidebar'
import Breadcrumbs from './components/breadcrumbs'

// routes
import About from './components/about'
import Dashboard from './components/dashboard/index'
import Error404 from './components/error/404'
import Users from './components/users/users.container'
import User from './components/users/user.container'

const StyledArticle = styled.article`
    padding: 100px 20px 0 260px;
`

class App extends React.Component {
    
    render(){
        return (
            <div>
                <Header/>
                <Sidebar/>     
                <Breadcrumbs/>           
                <StyledArticle>                    
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route exact path='/users' component={Users}/>
                        <Route exact path='/users/:userId' component={User}/>                        
                        <Route path='/about' component={About}/>
                        <Route component={Error404} />
                    </Switch>                
                </StyledArticle>
            </div>
        )
    }
}

export default App