import React from 'react'
import { Button, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import DateFormat from './../dateFormat'

const StyledTr = styled.tr`
    td {
        vertical-align: middle;
    }
`
const UsersList = props => (
    <section>
        <div><Button onClick={()=>{props.history.push('/users/2')}}>Add user</Button></div>
        <Table size="sm">                
            <thead>
                <tr>
                    <th style={{width: '30px'}}></th>
                    <th style={{width: '40px'}}></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Registered</th>
                </tr>
            </thead>
            <tbody>                                
                {
                    props.users.results && props.users.results.map((item, i) => {                        
                        return (
                            <StyledTr key={`key-${i}`}>
                                <td align="center"><input type="checkbox"/></td>
                                <td align="center"><img alt="" className="rounded-circle" src={item.picture.thumbnail} style={{maxHeight:'30px'}}/></td>
                                <td><Link style={{display:'block'}}to="/users/1">{ [item.name.title, item.name.first, item.name.last].join(' ') }</Link></td>
                                <td>{ item.email }</td>
                                <td><DateFormat date={item.registered.date}/></td>
                            </StyledTr>
                        )
                    })
                }                
            </tbody>
        </Table> 
    </section>
)

export default UsersList