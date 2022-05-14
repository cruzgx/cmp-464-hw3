import { Component } from 'react';
import Keyboard from './Keyboard';
import Wordle from './Wordle';

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curGuess: ""
        }
    }



    render() {
        return (
            <>
            <Wordle curGuess={this.state.curGuess}/>
            <br/>
            <Keyboard getGuess={this.getGuess} />
            <p>Parent State is: {this.state.curGuess} </p>
            </>
        )
    }

    /*
        This function allows for the guess from <Keyboard> to be moved up!
    */
    
    updatedGuess = () => {
        
    }

    getGuess = (someGuess) => {
        console.log(this.state)
        console.log("Parameter was: " + someGuess)

        this.setState({
            curGuess: someGuess
        }) 

        console.log(this.state)

        /* state not being displayed despite it being updated
        async call could fix this... */
    }
}

export default Game