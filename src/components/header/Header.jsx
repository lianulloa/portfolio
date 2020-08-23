import React, { Component } from "react";
// import './Header.scss';
import logo from "../../logotest.png";
import header from "../../header1.jpg";
import menu from "../../static/images/toggle_menu.svg";
import Scrollchor from "react-scrollchor";
import ChatBubble from "../chat_bubble/ChatBubble";
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
		const { fixed, width } = this.props;
		let navclass = "App-navigation";
		navclass += fixed === true ? " fixed" : " no-fixed";
		let menuOverlay = "App-menu-overlay";
		menuOverlay += this.state.menuHidden === true ? " hidden" : " show";

		return (
			<header className="App-header"
				style={{
					backgroundImage: `url(${header})`,
					backgroundSize: "100%",
					backgroundAttachment: 'fixed',
					backgroundPosition: 'center',
					display: 'flex',
					flexDirection: 'row'
				}}>
				<div style={{width:'50%',flex:'1 1 auto'}}>
					<img src={logo} alt="logo" width="60%"/>
				</div>
				<div style={{width:'50%',textAlign:'left'}}>
					<ChatBubble bubbleId="1" content={"Hello, We are Deal Manipulus"} />
					{this.state.showBubble1 && <ChatBubble bubbleId="2" content="We specialize in Web Design and Development" finalWidth="150%" />}
					{this.state.showBubble2 && <ChatBubble bubbleId="3" content="As well as mobile applications" finalWidth="110%" />}
					{this.state.showBubble3 && <ChatBubble bubbleId="5" content="Scroll down to see what we've got" finalWidth="110%" />}
				</div>
				<div className={navclass} >
					<div className="App-navigation-container">
						<Scrollchor
							to=""
							animate={{ offset: 0, duration: 400 }}
							className="App-link-logo"
						>
							<img src={logo} className="App-menu-logo" alt="Deal" />
						</Scrollchor>
						<ul style={{ display: width <= 764 ? "none" : "flex" }}>
							{this.state.sections.map(section => (
								<li>
									<Scrollchor
										to={section.link}
										animate={{ offset: 0, duration: 400 }}
										className="App-nav-link"
									>
										{section.text}
									</Scrollchor>
								</li>
							))}
						</ul>
						<button
							className="menu-trigger"
							onClick={this.handleMenuClick}
							style={{ display: width > 764 ? "none" : "block" }}
						>
							<img src={menu} alt="menu" />
						</button>
						<div className={menuOverlay}>
							<div
								className="App-menu-overlay-content"
								onClick={this.handleMenuClick}
							>
								<ul>
									{this.state.sections.map(section => (
										<li>
											<Scrollchor
												to={section.link}
												animate={{ offset: 0, duration: 400 }}
												className="App-nav-link"
											>
												{section.text}
											</Scrollchor>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="App-menu-overlay-bg" onClick={this.handleMenuClick}>
							{/* <button className="menu-close">x</button> */}
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
