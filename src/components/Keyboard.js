import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, {Component} from 'react'
import '../css/Keyboard.css'

class Keyboard extends Component {
    constructor(props){
        super(props)

        //state goes here
        this.state = {
            wordleGuess : ""
        };
    }
    
    handleLetterClick = (e) => {
        console.log("You've pressed me")

        //the following will get the letter from the button you pressed.
        console.log(e.currentTarget.textContent + "TEST")
        
        const userLetterPress = e.currentTarget.textContent

        //update state to reflect user letter press
        this.setState({
            wordleGuess: this.state.wordleGuess + userLetterPress
        })
    }

    delButtonClick = () => {
        //delete logic goes here
        //alert('delete button has been pressed!')
        
        console.log('Current val of state: ' + this.state.wordleGuess)
        let out = 'Dog'
        out = out.substring(0, out.length - 1);
        console.log('Expected output: ' + out)


        if(!this.state.wordleGuess === '') {
            this.setState({ //Bug possibly here since words get inputed as such: W O R D
                wordleGuess: this.state.wordleGuess.slice(0, -1)
            })
        } 

        console.log('New val of state ' + this.state.wordleGuess)
    }

    handleEnter = () => {
        alert("You've sucessefuly pressed the ENTER button")
    }

    render() {

        let letters = ['Q','W','E','R','T','Y','U','I','O','P',
                        'A','S','D','F','G','H','J','K','L'
                        ,'Enter','Z','X','C','V','B','N','M','Delete'];
        const Ploc = letters.indexOf('P')
        const Lloc = letters.indexOf('L')
        const DelLoc = letters.indexOf('Delete')
        const EnterLoc = letters.indexOf('Enter')
        

        let keyboardButtons = letters.map((letter, i) =>  
    
            {
                // Creates a new line at 'P' location & 'L' location 
                if(i === Ploc || i === Lloc) {
                   return <React.Fragment><p className="letters" onClick={this.handleLetterClick}>{letter}</p><br /></React.Fragment>
                   
                } else if (i === DelLoc) { // Creates a tag for the DELETE button
                    return <p className="letters" onClick={this.delButtonClick}>Delete</p>
                } else if(i == EnterLoc) { // Creates a tag for the ENTER button 
                    return <p className="letters" onClick={this.handleEnter}>Enter</p>
                } else {
                   return <p className="letters" onClick={this.handleLetterClick}>{letter} </p>  
                }
            }
        )
         

        console.log(keyboardButtons)

        return(
            <div className="keyboard-inputs">
                {keyboardButtons}

                <h1>The following is your current guess!</h1>
                <p>{this.state.wordleGuess}</p>
            </div>
        )
    }
}

export default Keyboard