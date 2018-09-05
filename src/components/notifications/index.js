import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

import { Alert } from 'reactstrap'

const StyledDiv = styled.div`
    position: absolute;
    right: 0;
    top: 50px;
`

export default class Notifications extends React.PureComponent {

    static propTypes = {
        errors: PropTypes.object.isRequired,
    }

    static defaultProps = {
        errors: {
            create: true,
            read: false,
            update: false,
            delete: false,
        }
    }
    
    constructor(props){
        super(props)
        
        this.state = {
            create: props.errors.create,
            read: props.errors.read,
            update: props.errors.update,
            delete: props.errors.delete,
            visible: false,
        }
    } 

    componentDidUpdate(prevProps){
        console.log(prevProps, this.props)
    }

    handleClick = () => this.setState({ visible: false })

    render(){

        const classes = {
            'primary': this.state.create,
            'read': this.state.read,
            'update': this.state.update,
            'delete': this.state.delete,
        }

        return (
            <StyledDiv>
                <Alert 
                    color={classnames(classes)}
                    isOpen={this.state.visible} 
                    toggle={this.handleClick}>
                    create error
                </Alert>
            </StyledDiv>
        )
    }
}