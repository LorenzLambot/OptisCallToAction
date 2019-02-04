import {Component} from "react";
import React from "react";
import CTAForm from "./CTAForm";

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <div className="App-header">
                    <img src={require('../images/optis.png')} alt="Optis"/>
                </div>
                <div className="App-content">
                    <h1>Work. Grow. Enjoy.</h1>
                    <p>Dynamic innovative team with endless oppertunities.</p>
                    <CTAForm/>
                </div>
            </div>
        );
    }
}

export default LandingPage;