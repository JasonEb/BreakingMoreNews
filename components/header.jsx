import React, { Component } from 'react';
import ContentEditable from 'react-simple-contenteditable';

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = { text: "BREAKING NEWS" }
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onBlur(){
        if( this.state.text.trim() === "" ){
            this.setState({text: "BREAKING NEWS"})
        }
    }
   
    handleChange (ev, value) {
        this.setState({text: value})
    }
    render() {
        return(
            <ContentEditable
                html={this.state.text}
                className="header"
                tagName="h1"
                onChange={ this.handleChange }
                contentEditable="plaintext-only"
                spellCheck="false"
                onBlur={this.onBlur}
            />
        )
    }
}

export default Header