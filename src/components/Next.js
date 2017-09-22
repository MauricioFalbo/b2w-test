import React, { Component } from 'react';

export default class Next extends Component {

	next() {
		let nextId = this.props.currentPlanetId + 1;
		const countPlanet = this.props.countPlanet;
		if (nextId > countPlanet) {
			nextId = 1;
		}
		this.props.getPlanetById(nextId);
	}

	render() {
		return (
			<div className="next">
				<a onClick={this.next.bind(this)} disabled={this.props.disable} >
					<span>NEXT</span>
				</a>
			</div>
		);

	}
}