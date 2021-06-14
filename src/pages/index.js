import React from "react";
import loadable from "@loadable/component";

const ReactPaperComponent = loadable(
  async () =>
    (await import("../components/ReactPaperComponent")).ReactPaperComponent,
  {
    fallback: <>Loading...</>,
  }
);

// import { PaperComponent } from "../components/Paper";

const IndexPage = ({ props }) => {
  return (
    <main>
      <title>Home Page</title>
      <div>
        <ReactPaperComponent />
      </div>
    </main>
  );
};

export default IndexPage;
