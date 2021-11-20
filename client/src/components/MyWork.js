import React, { useRef } from "react";
import TravelBug from "./carousels/TravelBug";
import Vendicator from "./carousels/Vendicator";
import PixelTri from "./carousels/PixelTri";
import AOS from "aos";
import "aos/dist/aos.css";

function App(props) {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease", delay: "" });
  }, {});
}

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
        <div className="my_work_header" data-aos="flip-down">
          <h1
            style={{ fontSize: "3em", textAlign: "center" }}
            className="scroll"
          >
            My Work
          </h1>
        </div>
        <TravelBug />
        <PixelTri />
        <Vendicator />
      </div>
      <hr
        style={{
          width: "70%",
          height: "5px",
          marginTop: "50px",
          borderColor: "rgb(103, 58, 183)",
          backgroundColor: "rgb(103, 58, 183)",
        }}
      />
    </div>
  );
}

