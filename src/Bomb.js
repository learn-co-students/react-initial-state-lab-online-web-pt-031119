import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    bombTimer() {
        return (this.state.secondsLeft === 0) ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    }

    render() {
        return(
            this.bombTimer()
        )
    }
}
