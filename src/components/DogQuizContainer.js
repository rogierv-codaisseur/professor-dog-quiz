import React, { Component } from "react";
import DogQuiz from "./DogQuiz.js";
import {
  getDogs,
  getRandomDogsAndPhoto,
} from "../actions/dogs";
import { connect } from "react-redux";

class DogQuizContainer extends Component {
  state = { loading: true };

  componentDidMount = () => {
    this.props.getDogs();
  };

  
  componentDidUpdate = (prevProps) => {
	if (this.props.image === prevProps.image) {
		this.props.getRandomDogsAndPhoto(this.props.dogs[0].dogs);
	}    
  }; 

  render() {
    if (!this.props.image) return "Loading photos...";
    return <DogQuiz image={this.props.image} dogs={this.props.dogs} />;
  }
}

const mapStateToProps = state => ({
  dogs: state.dogs,
  image: state.images,
  turn: state.successRate
});

export default connect(
  mapStateToProps,
  { getDogs, getRandomDogsAndPhoto }
)(DogQuizContainer);
