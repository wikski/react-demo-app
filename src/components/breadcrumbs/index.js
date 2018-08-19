import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledDiv = styled.div`
    left: 240px;
    position: absolute;
    top: 50px;

    ul {
        margin: 0;
        padding: 1rem;
    }
    li {
        display: inline-block;
        font-size: 11px;
        list-style-type: none;        
    }
    li + li {
        margin: 0 0.5rem;
    }
    a {
        color: #fb61d7;
        display: block;        
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    a.selected {
        color: #404046;
    }
    svg {
        color: #404046;
        margin-right: 0.5rem;
    }
`

const Breadcrumbs = props => (
    <StyledDiv>
        <ul>
        <li><NavLink activeClassName="selected" exact to="/"><FontAwesomeIcon icon="home"/>Home</NavLink></li>
        <li><NavLink activeClassName="selected" exact to="/users"><FontAwesomeIcon icon="chevron-right" size="sm"/>Users</NavLink></li>
        <li><FontAwesomeIcon icon="chevron-right" size="sm"/>First last</li>
        </ul>
    </StyledDiv>
)

export default Breadcrumbs