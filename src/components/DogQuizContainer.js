import React, { Component } from 'react';
import { connect } from 'react-redux';
import DogQuiz from './DogQuiz.js';
import * as request from 'superagent';
import { getDogs } from '../actions/dogs';

class DogQuizContainer extends Component {
	state = {};

	componentDidMount = () => {
		this.props.getDogs();
	};

	render() {
		if (!this.props.dogs) return 'Loading photos...';
		return <DogQuiz dogs={this.props.dogs} />;
	}
}

const mapStateToProps = state => ({
	dogs: state.dogs,
});

export default connect(
	mapStateToProps,
	{ getDogs }
)(DogQuizContainer);
