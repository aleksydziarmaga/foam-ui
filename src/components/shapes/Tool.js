import React from "react";
import { Image } from "react-konva";
import useImage from 'use-image';

const Tool = ({ shapeProps, onDragStart, onDragEnd }) => {
  const { image: img, ...rest } = shapeProps;
  const [image] = useImage(img);

  const shapeRef = React.useRef();
  return (
    <React.Fragment>
        <Image
            ref={shapeRef}
            {...rest}
            image={image}
            draggable
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
        />
    </React.Fragment>
  );
};

export default Tool;