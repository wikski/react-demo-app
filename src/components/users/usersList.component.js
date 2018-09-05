import React from 'react'
import { Table } from 'reactstrap'
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
                    props.users && props.users.map((item, i) => {                        
                        return (
                            <StyledTr key={`key-${i}`}>
                                <td align="center"><input type="checkbox"/></td>
                                <td align="center"><img alt="" className="rounded-circle" src={`https://randomuser.me/api/portraits/women/${i}.jpg`} style={{maxHeight:'30px'}}/></td>
                                <td><Link style={{display:'block'}}to={`/users/${item.id}`}>{ [item.title, item.first, item.last].join(' ') }</Link></td>
                                <td>{ item.email }</td>
                                <td><DateFormat date={item.registeredDate}/></td>
                            </StyledTr>
                        )
                    })
                }                
            </tbody>
        </Table> 
    </section>
)

export default UsersList