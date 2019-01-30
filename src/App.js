import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Item from './component/item/item'
import GridFourItem from './component/grids/grid.styled'
import LoginForm from './component/loginForm/loginForm'

import MainHeader from './component/header/mainHeader'

class App extends Component {

    render() {


        if ( !!this.props.joke ) {
            var listPhoto = this.props.joke.map( (item , index ) => {
              //  console.log( item )
                return (
                    <Item 
                        key={index}
                        id={item.id} 
                        joke={ item.joke } 
                        categories={ item.categories } />
                )
            })
        }
        
        return (
            <div className="App">

                <MainHeader />

                { 
                    this.props.login 
                    ? ''
                    : <LoginForm />
                }
                
                {  this.props.login 
                    ?   <div className="conteiner">
                            <GridFourItem>
                                { this.props.joke ? listPhoto : 'loading' }
                            </GridFourItem>

                            <button onClick={ this.props.loadMoreJokes } >  dispatch some event </button>
                        </div>
                    
                    : ''
                }
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        fetching: state.fetching,
        joke: state.joke,
        error: state.error,
        login: state.login 
    };
}

const mapDispatchToProps = dispatch => {
    return {
        /*
        onRequestDog: () => dispatch( { 
            type: "API_CALL" , 
            payload: {
                foo : 'bar'
            },
            fetch : {
                url : 'http://api.icndb.com/jokes/random/10',
                method : 'POST',
                headers : { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }
            }
             
        } ) ,
        */
        loadMoreJokes : () => dispatch( { 
            type: "LOAD_MORE" , 
            payload: {
                foo : 'bar'
            },
            fetch : {
                url : 'http://api.icndb.com/jokes/random/10',
                method : 'POST',
                headers : { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }
            }
        } ) 
        
    };
}

export default connect( mapStateToProps , mapDispatchToProps )(App);
