import CircleLoader from "../circleLoader/CircleLoader";
import React, { Component } from "react";
import anime from 'animejs';


import './ChatBubble.css';

class ChatBubble extends Component {

	constructor(props){
		super(props);
		this.state = {
			showContent: false
		};
		this.contentClassNames = 'loader';
	}

	componentDidMount() {
		this.animebubble = anime({
			targets: "rect",
			width: "40%",
			duration: 1000
		});
		this.animebubble.finished.then(
			() =>
			{
				anime({
					targets: "rect",
					width: '100%',
					paddingTop: '10px',
					delay: 2500,
					duration: 900
				});
				setTimeout(() => {

					this.setState({
						showContent: true
					});
					
				}, 2800);
			}
		);//end then
	}
	render(){
		let contentClassNames = [];
		if(!this.state.showContent)
		 contentClassNames.push('loader');
		return (
			<div className="chatBubbleRoot">
				<svg id="chatBubbleSvg"
					width="350"
					height="60"
					viewBox="0 0 92.60475 15.875006"
					>
					<rect
					style={{
							fill: "#a8b0b1", fillOpacity: 0.83921569, stroke: "#5b5b5b", strokeWidth: 1.19175148, strokeLinecap: "butt",
						strokeLinejoin: "round", strokeMiterlimit: 4, strokeDasharray: "none", strokeDashoffset: 0, strokeOpacity: 0, paintOrder: "normal",
					}}
					id="rect65"
					width="64.083725"
					height="14.728183"
					// x="0.86974591"
					// y="277.06168"
						ry="7.3640914"
						rx="7.3829165" 
					/>
				</svg>

				<div id="content" className={contentClassNames.join(' ')}>
					{this.state.showContent && this.props.content}
					{!this.state.showContent && <CircleLoader id="loader" />}
				</div>
			</div>
		);
	}
}

export default ChatBubble;