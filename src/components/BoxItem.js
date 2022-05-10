import React, { Component } from "react";
import '../css/Wordle.css'

class BoxItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="wordle-row">
                <p className="box-item">B</p>
                <p className="box-item">O</p>
                <p className="box-item">X</p>
                <p className="box-item">E</p>
                <p className="box-item">R</p>
            </div>
            
        )
        
    }
}

export default BoxItem