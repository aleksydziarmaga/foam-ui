import React from "react";
import { Circle } from "react-konva";

const Circ = ({ shapeProps, onDragStart, onDragEnd }) => {
  const shapeRef = React.useRef();

  return (
    <React.Fragment>
        <Circle
            ref={shapeRef}
            {...shapeProps}
            draggable
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
        />
    </React.Fragment>
  );
};

export default Circ;