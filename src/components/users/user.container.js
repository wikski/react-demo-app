import React from 'react'
import { Button, Container, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'
import moment from 'moment'

import { createUser, fetchUsers } from './../../actions/users.action'

class User extends React.Component {

    constructor(props){
        super(props)

        let state = {
            form: {
                fields: {
                    id: {
                        valid: null, value: '',
                    },
                    title: {
                        required: true, valid: null, value: '',
                    },
                    first: { 
                        required: true, valid: null, value: '',
                    },
                    last: {
                        required: true, valid: null, value: '',
                    },                
                    gender: {
                        required: true, valid: null, value: null,
                    },                           
                    email: {
                        required: 'email', valid: null, value: '',
                    },
                    registeredDate: {
                        required: true, valid: null, value: '',
                    },
                    registeredTime: {
                        required: 'time', valid: null, value: '',
                    },
                    roles: {
                        admin: {
                            type: 'checkbox', valid: null, value: false,
                        },
                        customer: {
                            type: 'checkbox', valid: null, value: false,
                        },
                        guest: {
                            type: 'checkbox', valid: null, value: false,
                        }
                    },
                    description: {
                        required: true, valid: null, value: '',
                    }
                },
                valid: false,
            }
        }
        
        this.state = this.props.form.validateAll(state)
    }

    componentDidMount(){

        const userId = this.props.match.params.userId
        
        if(userId){
            // edit user

            this.props.fetchUser(userId)
        }
    }

    componentDidUpdate(prevProps){
        
        const userId = this.props.match.params.userId

        if(userId && this.state.form.fields.id.value !== userId && this.props.user){
            // edit user
            
            let form = Object.assign({}, this.state.form)
            form = this.props.form.populate(form, this.props.user)            

            return this.setState({ form })            
        }
    }

    handleChange = ({ target }) => {
        
        const state = this.props.form.handleChange(this.state, target)
        
        return this.setState(state)
    }

    handleDateChange = (value, name, type) => {
        // stub out for global handler
        
        const target = { name, type, value }
        
        return this.handleChange({ target })
    }

    handleSubmit = e => {

        e.preventDefault()
        
        const state = this.props.form.handleSubmit(this.state)

        return this.props.save(state)
    }

    render(){
        return (            
            <section>
                <h2>First last</h2>        
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Container>                        
                        <FormGroup row>
                            <Col sm="3">                        
                                <Label for="_l0d3">Title</Label>
                                <Input 
                                    id="_l0d3"
                                    name="title"
                                    onChange={this.handleChange}
                                    required={this.state.form.fields.title.required}
                                    type="select"
                                    value={this.state.form.fields.title.value}>
                                    <option value="">Select...</option>
                                    <option value="mr">Mr</option>
                                    <option value="mrs">Mrs</option>
                                    <option value="miss">Miss</option>
                                    <option value="ms">Ms</option>                    
                                </Input>  
                            </Col>
                        </FormGroup>                
                        <FormGroup row>
                            <Col xs="12" sm="5">                        
                                <Label for="_h3f8">First</Label>
                                <Input 
                                    id="_h3f8"
                                    name="first" 
                                    onChange={this.handleChange}
                                    required={this.state.form.fields.first.required}
                                    type="text" 
                                    value={this.state.form.fields.first.value}/>
                            </Col>
                        </FormGroup>                
                        <FormGroup row>
                            <Col xs="12" sm="5">                        
                                <Label for="_k9g3">Last</Label>
                                <Input 
                                    id="_k9g3"                                     
                                    name="last" 
                                    onChange={this.handleChange}
                                    required={this.state.form.fields.last.required}
                                    type="text"
                                    value={this.state.form.fields.last.value}/>
                            </Col>
                        </FormGroup>   
                        <FormGroup tag="fieldset">
                            <legend className="col-form-label">Gender</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input                                         
                                        checked={this.state.form.fields.gender.value === 'male'}
                                        name="gender"
                                        onChange={this.handleChange}
                                        required={!this.state.form.fields.gender.value}
                                        type="radio" 
                                        value="male"/>{' '}
                                    Male
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input 
                                        checked={this.state.form.fields.gender.value === 'female'}                                        
                                        name="gender"
                                        onChange={this.handleChange}                                        
                                        required={!this.state.form.fields.gender.value}
                                        type="radio" 
                                        value="female"/>{' '}
                                    Female
                                </Label>
                            </FormGroup>             
                        </FormGroup>             
                        <FormGroup row>
                            <Col xs="12" sm="4">                        
                                <Label for="_k9h7">Email</Label>
                                <Input 
                                    id="_k9h7"
                                    name="email"
                                    onChange={this.handleChange}                                    
                                    required={this.state.form.fields.email.required}
                                    type="email" 
                                    value={this.state.form.fields.email.value}/>    
                            </Col>
                        </FormGroup>                
                        <FormGroup row>
                            <Col xs="12" sm="4">                        
                                <Label for="_k98h">Registered date</Label>
                                <DayPickerInput                                     
                                    format="D MMM YYYY"
                                    formatDate={formatDate}
                                    parseDate={parseDate}
                                    inputProps={{className:'form-control',id:'_k98h',type:'text'}}
                                    onDayChange={value=>{this.handleDateChange(value, 'registeredDate', 'text')}}
                                    placeholder="Select date..."
                                    selectedDays={this.state.form.fields.registeredDate.value}                                    
                                    value={moment(this.state.form.fields.registeredDate.value).format('D MMM YYYY')}/>
                            </Col>
                        </FormGroup> 
                        <FormGroup row>
                            <Col xs="12" sm="4">                        
                                <Label for="_jd33">Registered time</Label>
                                <Input      
                                    id="_jd33"         
                                    name="registeredTime"    
                                    onChange={this.handleChange}                                    
                                    required={this.state.form.fields.registeredTime.required}                                                                                          
                                    placeholder="Select date..."               
                                    type="time"                     
                                    value={this.state.form.fields.registeredTime.value }/>
                            </Col>
                        </FormGroup>                                
                        <FormGroup tag="fieldset">
                            <legend className="col-form-label">Roles</legend>                                        
                            <FormGroup check>
                                <Label check>
                                    <Input 
                                        type="checkbox" 
                                        name="roles.admin"
                                        onChange={this.handleChange}
                                        checked={this.state.form.fields.roles.admin.value}/>{' '}
                                    Admin
                                </Label>
                            </FormGroup>  
                            <FormGroup check>
                                <Label check>
                                    <Input 
                                        type="checkbox" 
                                        name="roles.customer"
                                        onChange={this.handleChange}
                                        checked={this.state.form.fields.roles.customer.value}/>{' '}
                                    Customer
                                </Label>
                            </FormGroup>  
                            <FormGroup check>
                                <Label check>
                                    <Input  
                                        type="checkbox" 
                                        name="roles.guest"
                                        onChange={this.handleChange}
                                        checked={this.state.form.fields.roles.guest.value}/>{' '}
                                    Guest
                                </Label>
                            </FormGroup>                
                        </FormGroup>                                        
                        <FormGroup row>
                            <Col sm="10">                        
                                <Label for="_j2q1">Description</Label>
                                <Input 
                                    type="textarea" 
                                    name="description" 
                                    onChange={this.handleChange}
                                    id="_j2q1"
                                    value={this.state.form.fields.description.value}/>
                            </Col>
                        </FormGroup>                   
                        <div className="mt-5">
                            <Button color="Button" size="lg" tag={Link} to="/users">Cancel</Button>{' '}
                            <Button color="primary" size="lg" type="submit">Save</Button>
                        </div>
                    </Container>
                </Form>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    user: state.users.user
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUsers(userId)),
    save: values => dispatch(createUser(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)