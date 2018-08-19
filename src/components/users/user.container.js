import React from 'react'
import { Button, Container, Col, Form, FormGroup, Input, Label } from 'reactstrap'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class User extends React.Component {

    state = {
        form: {
            dirty: false,            
            fields: {
                title: {
                    dirty: false, valid: null, value: '',
                },
                first: { 
                    dirty: false, valid: null, value: '',
                },
                last: {
                    dirty: false, valid: null, value: '',
                },                
                gender: {
                    dirty: false, valid: null, value: null,
                },                           
                email: {
                    dirty: false, valid: null, value: '',
                },
                registeredDate: {
                    dirty: false, valid: null, value: '',
                },
                registeredTime: {
                    dirty: false, valid: null, value: '',
                },
                admin: {
                    dirty: false, valid: null, value: false,
                },
                customer: {
                    dirty: false, valid: null, value: false,
                },
                guest: {
                    dirty: false, valid: null, value: false,
                },
                description: {
                    dirty: false, valid: null, value: '',
                }
            },
            pristine: true,
            valid: false,
        },
    }

    handleChange = ({ target }) => {
        
        const state = Object.assign({}, this.state)
        state.form.fields[target.name].value = target.type === 'checkbox' ? target.checked : target.value
        this.setState(state)
        console.log(this.state.form.fields)
    }

    render(){
        return (
            <section>
                <h2>First last</h2>        
                <Form>
                    <Container>
                        {/*<Row>
                            <Col>
                                <div className="drag-section">
                                    <FontAwesomeIcon icon="cloud-upload-alt" size="4x"/>                            
                                    <img alt="avatar" src="https://randomuser.me/api/portraits/men/22.jpg"/>
                                    <p>Click or drag files here to upload</p>
                                </div>
                            </Col>
                        </Row>*/}
                        <FormGroup row>
                            <Col sm="3">                        
                                <Label for="_l0d3">Title</Label>
                                <Input 
                                    id="_l0d3"
                                    name="title"
                                    onChange={this.handleChange} 
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
                                    type="text"
                                    value={this.state.form.fields.last.value}/>
                            </Col>
                        </FormGroup>   
                        <FormGroup tag="fieldset">
                            <legend className="col-form-label">Gender</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input 
                                        type="radio" 
                                        name="gender"
                                        onChange={this.handleChange} 
                                        checked={this.state.form.fields.gender.value === 'male'}
                                        value="male"/>{' '}
                                    Male
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input 
                                        type="radio" 
                                        name="gender"
                                        onChange={this.handleChange} 
                                        checked={this.state.form.fields.gender.value === 'female'}
                                        value="female"/>{' '}
                                    Female
                                </Label>
                            </FormGroup>             
                        </FormGroup>             
                        <FormGroup row>
                            <Col xs="12" sm="4">                        
                                <Label for="_k9h7">Email</Label>
                                <Input 
                                    type="email" 
                                    name="email"
                                    onChange={this.handleChange} 
                                    id="_k9h7"
                                    value={this.state.form.fields.email.value}/>                        
                            </Col>
                        </FormGroup>                
                        <FormGroup row>
                            <Col xs="12" sm="4">                        
                                <Label for="_k98h">Registered date</Label>
                                <Input 
                                    type="date" 
                                    name="registeredDate" 
                                    onChange={this.handleChange} 
                                    id="_k98h"
                                    value={this.state.form.fields.registeredDate.value}/>                        
                            </Col>
                        </FormGroup>                
                        <FormGroup row>
                            <Col xs="12" sm="4">                        
                                <Label for="_l9h3">Registered Time</Label>
                                <Input 
                                    type="time" 
                                    name="registeredTime" 
                                    onChange={this.handleChange} 
                                    id="_l9h3"
                                    value={this.state.form.fields.registeredTime.value}/>                        
                            </Col>
                        </FormGroup>   
                        <FormGroup tag="fieldset">
                            <legend className="col-form-label">Roles</legend>                                        
                            <FormGroup check>
                                <Label check>
                                    <Input 
                                        type="checkbox" 
                                        name="admin"
                                        onChange={this.handleChange}
                                        checked={this.state.form.fields.admin.value}/>{' '}
                                    Admin
                                </Label>
                            </FormGroup>  
                            <FormGroup check>
                                <Label check>
                                    <Input 
                                        type="checkbox" 
                                        name="customer"
                                        onChange={this.handleChange}
                                        checked={this.state.form.fields.customer.value}/>{' '}
                                    Customer
                                </Label>
                            </FormGroup>  
                            <FormGroup check>
                                <Label check>
                                    <Input  
                                        type="checkbox" 
                                        name="guest"
                                        onChange={this.handleChange}
                                        checked={this.state.form.fields.guest.value}/>{' '}
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
                            <Button color="link" size="lg">Cancel</Button>{' '}
                            <Button color="primary" size="lg">Save</Button>
                        </div>
                    </Container>
                </Form>
            </section>
        )
    }
}

export default User