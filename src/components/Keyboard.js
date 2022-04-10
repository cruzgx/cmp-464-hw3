import React, {Component} from 'react'
import '../css/Keyboard.css'

class Keyboard extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="keyboard-inputs">
                <div>Q</div> <div>W</div> <div>E</div> <div>R</div> <div>T</div> <div>Y</div>
            </div>
        )
    }
}

export default Keyboard