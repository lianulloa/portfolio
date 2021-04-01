import React, { Component } from "react";
import ChatBubble from "../chat_bubble/ChatBubble";
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
				// { text: "How find us", link: "#App-footer" }
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
		return (
			<header className="App-banner">
				<div style={{width:'50%',textAlign:'left'}}>
					<div className="me-pic" />
					<p style={{ fontSize: "1.3rem", textAlign: "justify", color: "white", marginTop: 80}}>
						Full Stack Developer with 5+ years of experience developing new, and improving
						existing software applications based on the cloud. Specialized in API Rest and
						design systems. Creative and clean-coder Computer Scientist.
					</p>
				</div>
				<div style={{width:'50%',textAlign:'left', position: "relative" }}>
					<div style={{position: "absolute", bottom: "80px", left: 60, width: "100%", padding: "0 30px"}}>
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
