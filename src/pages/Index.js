import React from "react";
import './Index.css';
import logo from '../assets/antonios_logo.png';

class Index extends React.Component {
    render() {
        return (
            <>
                <img id="logo" src={ logo } alt="antonio's logo"/>
                <div id="message">
                    Happy 2024!
                </div>
            </>
        );
    }
}

export default Index;
