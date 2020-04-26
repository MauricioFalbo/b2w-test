import React, { Component } from 'react';

import Planet from './Planet';
import Next from './Next';

import axios from 'axios';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = { planeta: '', currentPlanetId: '', countPlanet: '', nextButtonDisabled: false, loadingClass: true };
		this.getPlanetById = this.getPlanetById.bind(this);
	}

	componentDidMount() {
		const url = 'https://swapi.dev/api/planets/';
		axios.get(url)
			.then(response => {
				const countPlanet = response.data.count;
				const currentPlanetId = (Math.floor(Math.random() * countPlanet - 1) + 1);
				this.setState({ currentPlanetId, countPlanet });
				this.getPlanetById(currentPlanetId);
			})
			.catch(error => {
				console.log(error);
			});
	}

	getPlanetById(currentPlanetId) {
		const urlPlanet = `https://swapi.dev/api/planets/${currentPlanetId}`;
		console.log(urlPlanet);
		this.setState({ nextButtonDisabled: true });
		axios.get(urlPlanet)
			.then(response => {
				const planeta = response.data;
				this.setState({ planeta, currentPlanetId, nextButtonDisabled: false, loadingClass: false });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<div className={this.state.loadingClass ? 'block' : 'hide'}>
					<div className="main">
						<div className="loading"></div>	
					</div>	
				</div>
				<div className={!this.state.loadingClass ? 'block' : 'hide'}>
					<Planet nome={this.state.planeta.name} population={this.state.planeta.population} climate={this.state.planeta.climate} terrain={this.state.planeta.terrain} films={this.state.planeta.films} />
					<Next getPlanetById={this.getPlanetById} currentPlanetId={this.state.currentPlanetId} countPlanet={this.state.countPlanet} disable={this.state.nextButtonDisabled} />
				</div>
			</div>
		);
	}

}