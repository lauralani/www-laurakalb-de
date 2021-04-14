import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./home";
import Imprint from "./imprint";
import './app.css';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div id="particles-js">
                    <div class="header">
                        <h1>
                            <span class="site-title">Laura Kalb</span>
                            <span class="site-description">Network Engineer</span>
                        </h1>
                        <div class="header-icons">
                            <a aria-label="Send email" href="mailto:career@laurakalb.de"><i class="icon fa fa-envelope"></i></a>
                            <a aria-label="My LinkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/laura-kalb/"><i class="icon fa fa-linkedin-square"></i></a>
                            <a aria-label="My Github" target="_blank" rel="noreferrer" href="https://github.com/lauralani"><i class="icon fa fa-github-alt"></i></a>
                        </div>
                        <div class="header-links">
                        </div>
                    </div>
                    <a class="down" href="#about" data-scroll><i class="icon fa fa-chevron-down"></i></a>
                </div>
                <Route exact path="/" component={Home} />
                <Route path="/imprint" component={Imprint} />
                <footer class="footer">
                    <p>Built with React and <span class="love">❤</span> by <a href="https://github.com/lauralani">Laura Kalb</a> and delivered with Microsoft Azure - <NavLink exact to="/">Home</NavLink> - <NavLink to="/imprint">Datenschutz</NavLink></p>
                </footer>
            </HashRouter>
        );
    }
}

export default Main;
