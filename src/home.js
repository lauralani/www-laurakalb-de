import React, { Component } from "react";
import './app.css';

class Home extends Component {
    render() {
        return (
            <section id="about">
                <div class="user-details">
                    <h1>My Expertise</h1>
                    <p>I'm a Network Engineer, eager to learn new technologies. Lately I have been building infrastructure and applications in Azure leveraging <b>Serverless</b> Azure Functions with C#.</p>
                </div>
                <div class="user">
                    <div class="tech">
                        <h2>Networking</h2>
                        <img src="img/cisco.svg" alt="cisco logo" />
                        <img src="img/checkpoint.svg" alt="checkpoint logo" />
                        <img src="img/vnet.svg" alt="vnet logo" />
                        <p>I've primarily managed networks built on Cisco Nexus, Catalyst, routers and firewalls, in addition to Check Point firewalls and Azure Networking.</p>
                    </div>
                    <div class="tech">
                        <h2>Code</h2>
                        <img src="img/dotnet.svg" alt="dotnet logo" />
                        <img src="img/python.svg" alt="python logo" />
                        <img src="img/php.svg" alt="php logo" />
                        <p>My main development languages are C# and Python, but I have worked with ASP.NET, Javascript, PHP and more..</p>
                    </div>
                    <div class="tech">
                        <h2>Tools</h2>
                        <img src="img/git.svg" alt="git logo" />
                        <img src="img/centos.svg" alt="centos logo" />
                        <img src="img/azure.svg" alt="azure logo" />
                        <p>Git, Linux, Azure, Docker, you name it, I have used too many tools to count!</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
