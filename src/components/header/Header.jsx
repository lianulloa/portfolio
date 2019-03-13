import React, { Component } from "react";
// import './Header.scss';
import logo from "../../logotest.svg";
import header from "../../header1.jpg";
import menu from "../../static/images/toggle_menu.svg";
import Scrollchor from "react-scrollchor";
import ChatBubble from "../chat_bubble/ChatBubble";
class Header extends Component {
	state = {
		menuHidden: true,
		sections: [
			{ text: "About us", link: "#App-about" },
			{ text: "Services", link: "#App-services" },
			{ text: "Contact", link: "#App-contact" },
			{ text: "How find us", link: "#App-footer" }
		]
	};

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
				<h1 
					style={{
						width:'100%',
						textAlign:'center',
						fontSize:'7em',
						color:'white',
						fontFamily: 'V-Gerb Bold',
						position: 'relative',
						marginTop: '20px',
						// textShadow: '1px 1px 1px #c18f00'
						}}>
							DEAL
							<br></br>
					<small
						style={{
							fontSize: '60px',
							color: 'white',
								fontFamily: 'V-Gerb Bold',
							margin: 0,
							position: "absolute",
							left:0,
							width:"100%"
						}}>
						MANIPULUS
					</small>
				</h1>
				</div>
				<div style={{width:'50%',textAlign:'left'}}>
					<ChatBubble content={"Hello, We are DeaL Manipulus"} />

				</div>
				<div className={navclass} style={{backgroundColor:'transparent'}}>
					<div className="App-navigation-container">
						<Scrollchor
							to=""
							animate={{ offset: 0, duration: 500 }}
							className="App-link-logo"
						>
							<img src={logo} className="App-menu-logo" alt="Deal" />
						</Scrollchor>
						<ul style={{ display: width <= 764 ? "none" : "flex" }}>
							{this.state.sections.map(section => (
								<li>
									<Scrollchor
										to={section.link}
										animate={{ offset: 0, duration: 500 }}
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
												animate={{ offset: 0, duration: 500 }}
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
