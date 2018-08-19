import React from "react"
import styled from 'styled-components'

import iconMenu from './../../assets/icons/menu.svg'

const StyledHeader = styled.header`
    background-color: white;
    border-bottom: 1px solid #ddd;    
    height: 50px;
    margin-left: 240px;
    position: fixed;
    width: 100%;
    z-index: 1;

    a {
        display: block;
    }
    img {
        max-height: 50px;
    }
`

const Header = props => {
    return (
        <StyledHeader>
            <a href=""><img alt="menu" src={iconMenu}/></a>
        </StyledHeader>
    )
}

export default Header