import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.scss'

class MainHeader extends Component {

    render(){
        return (
            <header>
                <div className="contain">
                    <div className="logo">
                        Тут може бути ваше лого
                    </div>

                    {
                        this.props.login                        
                        ?   <div className="user">
                                <div className="name">{ this.props.user.name }</div>
                                <div className="role">{ this.props.user.role }</div>
                            </div>
                        : <div className="login-butt"> Тут може бути юзер якщо залогінеться </div>
                    }
                    
                    
                </div>
            </header>
        )
    }

}

const mapStateToProps = state =>{
    return {
        login: state.login,
        user: state.user
    }
}


export default connect( mapStateToProps )(MainHeader)