import React, { FC, CSSProperties } from "react";
import { useDragLayer, XYCoord } from "react-dnd";

import { CustomDragLayerContainer } from "./styles";

import { Card } from "./Card";
import { Column } from "./Column";

const getItemStyles = (currentOffset: XYCoord | null): CSSProperties => {
  if (!currentOffset) {
    return {
      display: "none"
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform
  };
};

const CustomDragLayer: FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset()
  }));

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {item.type === "COLUMN" ? (
          <Column
            id={item.id}
            index={item.index}
            isPreview={true}
            text={item.text}
          />
        ) : (
          <Card
            id={item.id}
            columnId={item.columnId}
            index={0}
            isPreview={true}
            text={item.text}
          />
        )}
      </div>
    </CustomDragLayerContainer>
  ) : null;
};

export default CustomDragLayer;
