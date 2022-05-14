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
        const MAX_WORD_GUESS_SIZE = 5

        //the following will get the letter from the button you pressed.

        console.log(e.currentTarget.textContent.replace(/\s/g, ""))
        const userLetterPress = e.currentTarget.textContent.replace(/\s/g, "") 

        //update state to reflect user letter press

        if(this.state.wordleGuess.length < MAX_WORD_GUESS_SIZE) {
            this.setState({
                wordleGuess: this.state.wordleGuess + userLetterPress
            })
        }
    }

    delButtonClick = () => {
        //delete logic goes here
        
        console.log('Current val of state: ' + this.state.wordleGuess)
        console.log('Length of State(string): ' + this.state.wordleGuess.length)
        //console.log('Expected Updated State: ' + this.state.wordleGuess.slice(0, -1))


        if(this.state.wordleGuess.length > 0) {
            this.setState({ 
                wordleGuess: this.state.wordleGuess.slice(0, -1)
            })
        } 

        //console.log('New val of state ' + this.state.wordleGuess)
    }

    handleEnter = () => {
        const VALID_WORD_SIZE = 5 

        if(this.state.wordleGuess.length < VALID_WORD_SIZE) {
            alert("Too short of a word length guess!\n\nTry again!")
            return
        }
        
        console.log("You've sucessefuly pressed the ENTER button")
        console.log("Attempting to lift this state up....")


        this.props.getGuess(this.state.wordleGuess)
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
                } else if(i === EnterLoc) { // Creates a tag for the ENTER button 
                    return <p className="letters" onClick={this.handleEnter}>Enter</p>
                } else {
                   return <p className="letters" onClick={this.handleLetterClick}>{letter} </p>  
                }
            }
        )


        return(
            <div className="keyboard-inputs">
                <div className="keyboard-container">
                    {keyboardButtons}
                </div>
                
                <div className='curState'>
                    <h1>The following is your current guess!</h1>
                    <h2><i><b>{this.state.wordleGuess}</b></i></h2>
                </div>
                
            </div>
        )
    }
}

export default Keyboard