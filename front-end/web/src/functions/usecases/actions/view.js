import { render } from "react-dom";
import React from "react";
import View from "../../../assemblers/view";

export default function Viewpanel() {
    render(<View />, document.getElementById("view"))
}