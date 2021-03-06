import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Image } from 'react-konva';
import Circle from '../shapes/Circle';
import Rectangle from '../shapes/Rectangle';
import Triangle from '../shapes/Triangle';
import Tool from '../shapes/Tool';

class MainStage extends Component {
  state = {
    circles: [],
    sqr: [],
    tri: [],
  }

  handleDragStart = e => {
    e.target.setAttrs({
      scaleX: 1.1,
      scaleY: 1.1
    });
  };
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
    });
  };

  render() {
    return (
      <Stage width={window.innerWidth - 240} height={window.innerHeight}>
        <Layer>
          {this.props.circles.map((circle, i) => {
            return (
              <Circle
                key={i}
                shapeProps={circle}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
              />
            );
          })}
          {this.props.rectangles.map((rectangle, i) => {
            return (
              <Rectangle
                key={i}
                shapeProps={rectangle}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
              />
            );
          })}
          {this.props.triangles.map((triangle, i) => {
            return (
              <Triangle
                key={i}
                shapeProps={triangle}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
              />
            );
          })}
          {this.props.screwdrivers.map((screwdriver, i) => {
            return (
              <Tool
                key={i}
                shapeProps={screwdriver}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
              />
            );
          })}
        </Layer>
      </Stage>
    );
  }
}

export default MainStage;
