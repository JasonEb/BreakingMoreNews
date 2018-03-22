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
        
        return(
            <ContentEditable
                html={this.state.text}
                className="description"
                tagName="div"
                onChange={ this.handleChange }
                contentEditable="plaintext-only"
                spellCheck="false"
                onBlur={this.onBlur}
            />
        )
    }
}

export default Description