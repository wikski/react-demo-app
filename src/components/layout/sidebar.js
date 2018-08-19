import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from './../../assets/images/logo.svg'

const Aside = styled.aside`
    background: #404046;
    bottom: 0;
    position: fixed;
    top: 0;
    width: 240px;

    > div {
        background-color: #2d2d36;
        height: 50px;
        
        h1 {
            background-image: url('${logo}');
            background-position: 14px 16px;
            background-repeat: no-repeat;
            background-size: 22%;
            color: #fff;
            display: inline-block;
            font-size: 20px;
            font-weight: normal;
            line-height: 54px;
            margin: 0;
            text-indent: 49px;

            span {
                color: #888;
                font-size: 10px;             
            }
        }
    }
    ul {
        margin: 1rem;
        padding: 0;
    }
    li {
        list-style-type: none;

        a {
            color: #888;
            display: block;
            font-size: 12px;
            padding: 0.7rem;
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
        }

        a.selected,
        a:hover {
            color: #ccc;
        }
        a.selected svg {
            color: #61dafb;
        }
        svg {
            float: right;
        }
    }
`
const Sidebar = props => {
    return (        
        <Aside>
            <div><h1>React <span>DEMO</span></h1></div>
            <ul>
            <li><NavLink activeClassName="selected" exact to="/">Dashboard <FontAwesomeIcon icon="tachometer-alt"/></NavLink></li>
            <li><NavLink activeClassName="selected" to="/users">Users<FontAwesomeIcon icon="users"/></NavLink></li>
            <li><NavLink activeClassName="selected" to="/about">About<FontAwesomeIcon icon="info-circle"/></NavLink></li>
            </ul>
        </Aside>
    )
}

export default Sidebar