import React, { Component } from "react";
import logo from "../../logotest.png";
import menu from "../../static/images/toggle_menu.svg";
import Scrollchor from "react-scrollchor";
import ChatBubble from "../chat_bubble/ChatBubble";
import NavBar from "../navBar/NavBar"

import "./Banner.scss"
class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			menuHidden: true,
			sections: [
				{ text: "About us", link: "#App-about" },
				{ text: "Services", link: "#App-services" },
				{ text: "Contact", link: "#App-contact" },
				{ text: "How find us", link: "#App-footer" }
			],
			showWhatWeDo: false
		};
		setTimeout(() => {
			this.setState({
				showBubble1: true
			})
		}, 3500);
		setTimeout(() => {
			this.setState({
				showBubble2: true
			})
		}, 6900);
		setTimeout(() => {
			this.setState({
				showBubble3: true
			})
		}, 10000);
	}

	handleMenuClick = () => {
		this.setState({ menuHidden: !this.state.menuHidden });
	};

	render() {
		// let navclass = "App-navigation";
		// navclass += fixed === true ? " fixed" : " no-fixed";

		return (
			<header className="App-banner">
				<div style={{width:'50%',textAlign:'left'}}>
					<h1 style={{color: "#222222", fontSize: "4rem", fontFamily: "OpenSans-Regular", lineHeight: "73px"}}>
						Websites and Mobile applications development
					</h1>
					<p style={{ fontSize: "1.3rem", textAlign: "justify"}}>
						Best way to promote your business. It doesn't matters 
						if you are the owner of a small rent business
						or a multinational bank. Every business needs a 
						good marketing strategy and it starts by showing your products
						to your users. What better way than through a website or an 
						application accessed right from their smartphone?
					</p>
				</div>
				<div style={{width:'50%',textAlign:'left', position: "relative"}}>
					<div style={{position: "absolute", bottom: "140px", width: "100%", padding: "0 30px"}}>
						<ChatBubble bubbleId="1" content={"Hello, We are Deal Manipulus"} />
						{this.state.showBubble1 && <ChatBubble bubbleId="2" content="We specialize in Web Design and Development" finalWidth="150%" />}
						{this.state.showBubble2 && <ChatBubble bubbleId="3" content="As well as mobile applications" finalWidth="110%" />}
						{this.state.showBubble3 && <ChatBubble bubbleId="5" content="Scroll down to see what we've got" finalWidth="110%" />}
					</div>
				</div>
				{/* <NavBar /> */}
			</header>
		);
	}
}

export default Header;
