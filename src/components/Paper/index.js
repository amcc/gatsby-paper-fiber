import React from "react";

import { PaperContainer, Circle, Layer } from "@psychobolt/react-paperjs";

const PaperComponent = ({ props }) => {
  const Shapes = () => (
    <Circle center={[120, 50]} radius={35} fillColor="#00FF00" />
  );
  return (
    <>
      <div>
        <PaperContainer {...props}>
          <Circle center={[80, 50]} radius={35} fillColor="red" />
          <Layer>
            <Shapes />
          </Layer>
        </PaperContainer>
      </div>
    </>
  );
};

export default PaperComponent;
