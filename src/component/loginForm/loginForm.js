import React, { Component } from 'react'
import { connect } from "react-redux"
import './style.scss'

class LoginForm extends Component {
    state = {
        name : '',
        pass : ''
    }

    onChangeInput = ( event ) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = ( event ) => {
        event.preventDefault()
        this.props.submitForm( { name : this.state.name, pass : this.state.pass } )
    }

    render (){
        return (
            <form action="" onSubmit={ this.submitHandler }>
                <div className="inputer">
                    <input type="text" name="name" value={ this.state.name } onChange={ this.onChangeInput } />
                </div>
                <div className="inputer">
                    <input type="password" name="pass" value={ this.state.pass } onChange={ this.onChangeInput } />
                </div>
                <div className="submiter">
                    <button type="submit"> Login </button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        submitForm : ( data ) => dispatch({
            type: "SUBMIT_LOGIN_FORM" , 
            payload : data ,  
            fetch : {
                url : 'http://api.icndb.com/jokes/random/10',
                method : 'POST',
                headers : { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }
            }
        })
        
    })
}

export default connect( null , mapDispatchToProps )(LoginForm)