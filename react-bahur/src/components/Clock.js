import React from "react";

export default class Clock extends React.Component {

    constructor() {
        super();
        setInterval(() => {
            // update state
            this.setState({time: new Date().toLocaleTimeString()});
        }, 1000)
    }

    state = {
        // initialize state
        time: new Date().toLocaleTimeString(),
        name: "Slavi",
        fullName: "Vargulev"
    }   


    render() {
        console.log("Rendering clock");
        return <div>{this.state.time} {this.state.name} {this.props.name}</div>;
    }


}