import React, { Component } from "react";
import '../css/Wordle.css'
import BoxItem from "./BoxItem";


class Wordle extends Component {

    constructor(props) {
        super(props);

        
    }

    render() {
        return (
            
            <div className="wordle-row-container">
                <BoxItem curGuess={this.props.curGuess}/>
                <BoxItem />
                <BoxItem />
                <BoxItem />
                <BoxItem />
                <BoxItem />
            </div>
        )

    }

}

export default Wordle