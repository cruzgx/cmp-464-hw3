import React, { Component } from "react";
import '../css/Wordle.css'
import BoxItem from "./BoxItem";


class Wordle extends Component {

    //it might be a good idea to rename the component!

    constructor(props) {
        super(props);
    }

     
    render() {
        return (
            //this table could be component itself
            
            // <div className="letter-container">
            //     <BoxItem />
            //     <BoxItem />
            //     <BoxItem />
            //     <BoxItem />
            //     <BoxItem />
            //     <BoxItem />
            // </div>

            <div className="wordle-row-container">
                <BoxItem />
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