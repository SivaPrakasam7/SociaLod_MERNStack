import { render } from "react-dom";
import React from "react";
import View from "../../../assemblers/view";

export default function Viewpanel(info) {
    render(<View data={info} />, document.getElementById("view"))
}