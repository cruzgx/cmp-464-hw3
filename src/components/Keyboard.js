import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, {Component} from 'react'
import '../css/Keyboard.css'

class Keyboard extends Component {
    constructor(props){
        super(props)
    }

    render() {

        let letters = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
        const Ploc = letters.indexOf('P')
        const Lloc = letters.indexOf('L')

        let keyboardButtons = letters.map((letter, i) =>  
        //    (i == Ploc || Lloc) ?  <p className="letters">{letter}</p> <br /> : <p className="letters">{letter}</p>
            {
                if(i === Ploc || i === Lloc) {
                   return <React.Fragment><p className="letters">{letter}</p><br /></React.Fragment>
                   
                } else {
                   return <p className="letters">{letter}</p>
                }
            }
        )

        console.log(keyboardButtons)

        return(
            <div className="keyboard-inputs">
                {/* <div>Q</div> <div>W</div> <div>E</div> <div>R</div> <div>T</div> <div>Y</div> */}
                {/* <p>This a test and only a</p> <p>is</p> <p>a</p> <p>test</p> */}
                {keyboardButtons}
            </div>
        )
    }
}

export default Keyboard