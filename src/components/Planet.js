import React, { Component } from 'react';

export default class Planet extends Component {

	render() {

		let countFilms = 0;
		if (typeof this.props.films !== 'undefined') {
			countFilms = this.props.films.length;
		}

		return (
			<div className="main">
				<div className="content">
					<div className="title">
						<h2>{this.props.nome}</h2>
					</div>
					<div className="itens">
						<ul>
							<li>POPULATION: {this.props.population}</li>
							<li>CLIMATE: {this.props.climate}</li>
							<li>TERRAIN: {this.props.terrain}</li>
						</ul>
					</div>
					<div className="films">Featured in {countFilms} films</div>
				</div>

			</div>
		);

	}
}