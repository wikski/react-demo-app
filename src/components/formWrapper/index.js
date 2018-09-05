import React from 'react'

const FormWrapper = Component => {
    // high order component

    return class HOC extends React.Component {        

        validate = field => {

            // form validation
            if(field.required){

                // empty
                field.valid = field.value === '' ? false : true

                // email      
                if(field.required === 'email'){

                    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
                    field.valid =  re.test(String(field.value).toLowerCase()) ? true : false                
                }
            }            
            
            return field
        }

        validateAll = state => {

            state = { ...state }

            Object.keys(state.form.fields).forEach(item => {
                
                state.form.fields[item] = this.validate(state.form.fields[item])
            })

            return state
        }

        handleChange = (state, target) => {
            
            function findNested(obj, splitArr){
                // handle nested objects

                const keyName = splitArr.shift(1)
                
                if(splitArr.length === 0){
    
                    return obj[keyName]
                
                } else {
    
                    return findNested(obj[keyName], splitArr)
                }            
            }
    
            let newState = Object.assign({}, state)
            const splitArr = target.name.split('.')
    
            const field = findNested(newState.form.fields, splitArr)
            
            field.value = target.type === 'checkbox' ? target.checked : target.value
            
            this.validate(field, target.type)
            
            return newState
        }

        populate = (form, data) => {            
            
            for(const i in form.fields){

                if(form.fields[i].hasOwnProperty('value')){

                    form.fields[i].value = data[i]
                }
            }

            return form
        }

        handleSubmit = state =>  {            
            
            let fields = { ...state.form.fields }
            let fieldsParsed = {}
            
            const parseNested = (fieldsParsed, fields) => {

                Object.keys(fields).forEach(item => {

                    if(fields[item].hasOwnProperty('value')){
                        fieldsParsed[item] = fields[item].value        
                    } else {
                        parseNested(fieldsParsed, fields[item])
                    }
                })
            }

            parseNested(fieldsParsed, fields)            
            
            return fieldsParsed            
        }   
        
        form = {            
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            populate: this.populate, 
            validate: this.validate,
            validateAll: this.validateAll,        
        }
        
        render(){
            
            return <Component {...this.props} form={this.form}/>
        }
    }
}

export default FormWrapper