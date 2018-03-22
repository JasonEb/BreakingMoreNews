import React, { Component } from 'react';
import ContentEditable from 'react-simple-contenteditable';

class Description extends React.Component {
    constructor(props){
        super(props)
        this.state = { text: "PROFESSIONAL E-GAMER IN RUINS" }
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onBlur(){
        if( this.state.text.trim() === "" ){
            this.setState({text: "PROFESSIONAL E-GAMER IN RUINS"})
        }
    }
   
    handleChange (ev, value) {
        this.setState({text: value})
    }

    render() {
        let {text} = this.state
        
        return <div id="description" >
            <ContentEditable
            html={this.state.text}
            onChange={ this.handleChange }
            contentEditable="plaintext-only"
            spellcheck="false"
            onBlur={this.onBlur}
            />
        </div>
    }
}

export default Description