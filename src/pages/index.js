import React, { useState } from "react";
import * as styles from "./PageStyles.module.scss";
import loadable from "@loadable/component";

const PaperComponent = loadable(() => import("../components/Paper"));

// import { PaperComponent } from "../components/Paper";

const IndexPage = ({ props }) => {
  return (
    <main>
      <title>Home Page</title>
      <div>
        <PaperComponent />
      </div>
    </main>
  );
};

export default IndexPage;
