import React, { Component } from "react";
import DogQuiz from "./DogQuiz.js";
import { getDogs, getBreedPhoto } from "../actions/dogs";
import { connect } from "react-redux";

class DogQuizContainer extends Component {
  state = {};

  componentDidMount = () => {
    this.props.getDogs();

    this.props.getBreedPhoto()
  };

  render() {
    if (!this.props.dogs) return "Loading photos...";
    return <DogQuiz dogs={this.props.dogs} />;
  }
}

const mapStateToProps = state => ({

  dogs: state.dogs,
  image: state.images
});

export default connect(
  mapStateToProps,
  { getDogs, getBreedPhoto }
)(DogQuizContainer);
