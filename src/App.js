import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Item from './component/item/item'
import GridFourItem from './component/grids/grid.styled'
import FormContainer from './component/form/form.styled'

class App extends Component {

    state = {
        filterValue: ''
    }

    componentDidMount(){
       this.props.onRequestDog()
    }

    handleInput = ( event ) => {

        this.setState({ filterValue : event.target.value });
        this.props.dispatchFilterData( event.target.value )

    }

    submitFilterForm( event ){
        event.preventDefault()
    }

    render() {
        if ( !!this.props.dog ) {
            var listPhoto = this.props.dog.map( (item , index ) => {
              //  console.log( item )
                return (
                    <Item 
                        key={item.id}
                        id={item.id} 
                        thumbnailUrl={ item.thumbnailUrl } 
                        title={ item.title } />
                )
            })
        }
        
        return (
            <div className="App">
                <FormContainer onSubmit={this.submitFilterForm}>
                    <div className="row">
                        <div className="labled">Text 1</div>
                        <input type="text"  placeholder='text1' value={ this.state.filterValue } onChange={ this.handleInput  } />
                    </div>
                </FormContainer>
                <GridFourItem>
                    { this.props.dog ? listPhoto : 'loading' }
                </GridFourItem>

                <button onClick={ this.props.dispatchSomeEvent } >  dispatch some event </button>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        fetching: state.fetching,
        dog: state.dog,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onRequestDog: () => dispatch( { type: "API_CALL_REQUEST" , payload:  'data' } ) ,
        dispatchSomeEvent : () => dispatch( { type: "SEND_SOME_EVENT" } ) ,
        dispatchFilterData : (data) => dispatch( { type: "FILTER_ELEMENTS" , payload : data } ) 
    };
}

export default connect( mapStateToProps , mapDispatchToProps )(App);
