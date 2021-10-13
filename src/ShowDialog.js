import unsplash from "./unsplash.jpg";
import { Graph } from "./Graph";
import { useState } from "react";

function ShowDialog(props) {
  const { setShow } = props; //destructoring props
  const [graph, setGraph] = useState(false);
  const [gif, setGif] = useState(false);
  function gifHandler() {
    if (gif === false)
      setTimeout(function () {
        setGif(false);
      }, 7 * 1000);
  }
  return (
    <>
      <div className="dialog-box">
        <img src={unsplash} alt="laptop" className="img-border" />
        <button
          onClick={() => {
            setGif(!gif);
            gifHandler();
          }}
        >
          Show GIF
        </button>
        <button
          onClick={() => {
            setGraph(!graph);
          }}
        >
          Show Graph
        </button>
        <button
          className="cross"
          onClick={() => {
            setShow(false);
          }}
        >
          X
        </button>
      </div>
      <div
        style={{
          margin: "5px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {gif ? (
          <img
            src="https://i.gifer.com/ZZ5H.gif"
            alt="gif"
            height={100}
            style={{ margin: "5px" }}
          />
        ) : null}
        {graph ? <Graph style={{ margin: "5px" }} /> : null}
      </div>
    </>
  );
}
export { ShowDialog };
