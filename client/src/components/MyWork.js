import React, { useRef } from "react";
import TravelBug from "./carousels/TravelBug";
import Vendicator from "./carousels/Vendicator";
import PixelTri from "./carousels/PixelTri";

function MyWork(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
      <hr style={{ width: "100%", marginTop: "50px" }} />
    </div>
  );
}

export default MyWork;
