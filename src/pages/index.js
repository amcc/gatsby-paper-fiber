import * as React from "react";
import * as styles from "./PageStyles.module.scss";
// import loadable from "@loadable/component";

//
// this isn't working on develop
//
// const { PaperContainer, Circle, Layer } = loadable(
//   () => import("@psychobolt/react-paperjs"),
//   {
//     fallback: <>Loading...</>,
//   }
// );

//
// this works on develop - wont build
//

import { PaperContainer, Circle, Layer } from "@psychobolt/react-paperjs";

const IndexPage = ({ props }) => {
  const Shapes = () => (
    <Circle center={[120, 50]} radius={35} fillColor="#00FF00" />
  );
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <div>
        <PaperContainer {...props}>
          <Circle center={[80, 50]} radius={35} fillColor="red" />
          <Layer>
            <Shapes />
          </Layer>
        </PaperContainer>
      </div>
      <p>
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
    </main>
  );
};

export default IndexPage;
