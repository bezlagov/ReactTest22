import React from "react";

const greetingText = React.createElement('h1', { className: "my_h1" }, "Hello Text")
export class FirstComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                {greetingText}
                {this.props.children}
            </div>
        );
    }
}

//export default FirstComponent;
