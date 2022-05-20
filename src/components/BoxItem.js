import React, { Component } from "react";
import '../css/Wordle.css'

class BoxItem extends Component {

    constructor(props) {
        super(props)
    }

    isWordValid = () => {
        if(this.props.curGuess === '') {
            console.log(this.props.curGuess)
            return false
        } else {
            console.log(this.props.curGuess)
            return true
        }
    }




    
    render() {
        
        return(
            <div className="wordle-row">
                {/* <p className="box-item">{this.isWordValid ? this.props.curGuess.charAt(0) : null}</p> */}
                {/* {this.isWordValid ? <p>{this.props.curGuess.charAt(0)}</p> : null} */}
                
                {this.isWordValid ? <p className="box-item">{this.props.curGuess}</p> : <p className="box-item">B</p>}
                <p className="box-item">X</p>
                <p className="box-item">X</p>
                <p className="box-item">X</p>
                <p className="box-item">X</p>
            </div>
            
        )
        
    }
}

export default BoxItem