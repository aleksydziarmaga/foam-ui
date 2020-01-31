import React from "react";
import { Rect } from "react-konva";

const Rectangle = ({ shapeProps, onDragStart, onDragEnd }) => {
  const shapeRef = React.useRef();
  
  return (
    <React.Fragment>
        <Rect
            ref={shapeRef}
            {...shapeProps}
            draggable
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
        />
    </React.Fragment>
  );
};

export default Rectangle;