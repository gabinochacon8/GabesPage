import React, { useRef } from "react";
import TravelBug from "./carousels/TravelBug";
import Vendicator from "./carousels/Vendicator";
import PixelTri from "./carousels/PixelTri";

function MyWork(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="mywork"
    >
      <div className="myWork">
        <h1 style={{ fontSize: "3em", textAlign: "center" }}>My Work</h1>
        <TravelBug />
        <PixelTri />
        <Vendicator />
      </div>
    </div>
  );
}

export default MyWork;
