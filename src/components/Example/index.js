import React from "react";
//import { FirstComponent } from "../FirstComponent/firstComponent";
//import FunctionComponent from "../FunctionComponent";

//const isLogin = true;
export class Example extends React.Component {
    render() {
        return <div>
            {this.props.name ? <h1>Hello, {this.props.name}</h1> : <h1>Hello guest</h1>}
        {this.props.name&& "How are you?"}
        </div>
        /*
if(this.props.name){
    return <div>Hello {this.props.name}</div>
}
else{
    return <div>Hello guest!</div>
}*/

        /*   return (
               <div>{isLogin && <FirstComponent />}</div>
               /*      <div>
                       this is if statement {isLogin ? <FirstComponent /> : <FunctionComponent />}
                     </div>
             
           );*/

    }
}