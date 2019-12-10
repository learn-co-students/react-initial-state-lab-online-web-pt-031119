// your ImageSlider code here!
import React, { Component } from 'react';
import Bomb from './ImageSlider';

export default class ImageSlider extends Component {


  constructor() {
    super()
      this.state = {
        currentSlideIndex: 0
      }
  }

  render() {
    return(
      'I am on slide 0'
    )
  }

}
