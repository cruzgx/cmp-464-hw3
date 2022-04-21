import React, { Component } from "react";
import '../css/Wordle.css'

class Wordle extends Component {

    //it might be a good idea to rename the component!

    constructor(props) {
        super(props);
    }

     
    render() {
        return (
            //this table could be component itself
            <div className="letter-container">
                <p className="box-item"></p>
                <p className="box-item"></p>
                <p className="box-item"></p>
                <p className="box-item"></p>
                <p className="box-item"></p>
            </div>
        )

    }

}

export default Wordle