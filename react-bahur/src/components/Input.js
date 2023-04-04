import React from "react";

export default class Input extends React.Component {

    state = {
        inputValue: ""
    }

    onChangeHandler = (event) => {
        console.log(event.target.value);
        this.setState({inputValue: event.target.value});
    }

    render() {
        return <React.Fragment>
            State: {this.state.inputValue}
            <input onChange={this.onChangeHandler} type={"text"} value={this.state.inputValue} placeholder={"Type your name here"}></input>
        </React.Fragment>
    }

}