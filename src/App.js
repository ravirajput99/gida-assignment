import React, { useState } from "react";
import unsplash from "./unsplash.jpg";
import "./App.css";
import { ShowDialog } from "./ShowDialog";
function ImageButton(props) {
  const { setShow } = props; //destructoring props
  return (
    <>
      <img src={unsplash} alt="laptop" className="img-border" />
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show Dialog
      </button>
    </>
  );
}
export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App" style={{ transition: "1s all ease" }}>
      {show ? null : <ImageButton setShow={setShow} />}
      {show ? <ShowDialog setShow={setShow} /> : null}
    </div>
  );
}
