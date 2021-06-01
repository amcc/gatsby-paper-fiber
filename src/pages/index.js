import * as React from "react";
import * as styles from "./PageStyles.module.scss";
import loadable from "@loadable/component";

const { PaperContainer, Circle, Layer } = loadable(
  () => import("@psychobolt/react-paperjs"),
  { ssr: false }
);

// const Shapes = () => (
//   <Circle center={[120, 50]} radius={35} fillColor="#00FF00" />
// );

const IndexPage = ({ props }) => {
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
        {/* <PaperContainer {...props}>
          <Circle center={[80, 50]} radius={35} fillColor="red" />
          <Layer>
            <Shapes />
          </Layer>
        </PaperContainer> */}
      </div>
      <p>
        Edit <code>src/pages/index.js</code> to see this page update in
        real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
    </main>
  );
};

export default IndexPage;
