import React from "react";
import { Line } from 'react-konva';

const Triangle = ({ shapeProps, onDragStart, onDragEnd }) => {
  const shapeRef = React.useRef();

  return (
    <React.Fragment>
        <Line
            ref={shapeRef}
            {...shapeProps}
            points={[100, 0, 0, 0, 100, 100]}
            closed
            draggable
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
        />
    </React.Fragment>
  );
};

export default Triangle;