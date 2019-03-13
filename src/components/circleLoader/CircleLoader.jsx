import React, { Component } from "react";
import './CircleLoader.css';
import anime from 'animejs';


class CircleLoader extends Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.animeCircleTimeline = anime.timeline({
			direction: 'alternate',
			loop: true
		});
		this.animeCircleTimeline
		.add({
			targets: "#circle1.circleLoaderSvg",
			scale: 1.3,
			duration: 300,
		})
		.add({
			targets: "#circle2.circleLoaderSvg, #circle3.circleLoaderSvg",
			scale: 1.3,
			translateX: '17.5px',
			duration: 500
		})
		.add({
			targets: "#circle3.circleLoaderSvg",
			scale: 1.3,
			translateX: '35px',
			duration: 500
		});
	}
	render(){
		return (
			<div className="circleLoaderRoot" >
				<svg className="circleLoaderSvg" id="circle1"
				width="20"
				height="20"
				viewBox="0 0 26.458333 26.458333"
				// style={{top: '20%'}}
				>
					<circle
					style={{fill:'#222222',fillOpacity:1,stroke:'#00145b',strokeWidth:0.39390513,strokeLinecap:'butt',
					strokeLinejoin:'round',strokeMiterlimit:4,strokeDasharray:'none',strokeDashoffset:0,strokeOpacity:0,paintOrder:'normal'}}
					// id="path830"
					cx="50%"
					cy="50%"
					r="9" 
					/>
				</svg>
				<svg className="circleLoaderSvg" id="circle2"
				width="20"
				height="20"
				viewBox="0 0 26.458333 26.458333"
				// style={{top: '20%'}}
				>
					<circle
					style={{fill:'#222222',fillOpacity:1,stroke:'#00145b',strokeWidth:0.39390513,strokeLinecap:'butt',
					strokeLinejoin:'round',strokeMiterlimit:4,strokeDasharray:'none',strokeDashoffset:0,strokeOpacity:0,paintOrder:'normal'}}
					// id="path830"
					cx="50%"
					cy="50%"
					r="9" 
					/>
				</svg>
				<svg className="circleLoaderSvg" id="circle3"
				width="20"
				height="20"
				viewBox="0 0 26.458333 26.458333"
				// style={{ top: '20%'}}
				>
					<circle
					style={{fill:'#222222',fillOpacity:1,stroke:'#00145b',strokeWidth:0.39390513,strokeLinecap:'butt',
					strokeLinejoin:'round',strokeMiterlimit:4,strokeDasharray:'none',strokeDashoffset:0,strokeOpacity:0,paintOrder:'normal'}}
					// id="path830"
					cx="50%"
					cy="50%"
					r="9" 
					/>
				</svg>

			</div>
		);
	}
}

export default CircleLoader;