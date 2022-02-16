import React from "react";
import { Logger } from "../Logger/Logger";
import { SimpleFlow } from "../SimpleFlow/SimpleFlow";

export class DebugComponent extends React.Component {

    render() {
        return (
        <div>
            {this.props.isDebug?<Logger />:<SimpleFlow />}
        </div>)
    }
}