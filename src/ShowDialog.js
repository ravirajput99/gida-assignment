import unsplash from "./unsplash.jpg";
import { Graph } from "./Graph";
import { useState } from "react";
function ShowDialog(props) {
  const { setShow } = props; //destructoring props
  const [graph, setGraph] = useState(false);
  const [gif, setGif] = useState(false);
  return (
    <>
      <div className="dialog-box">
        <img src={unsplash} alt="laptop" className="img-border" />
        <button
          onClick={() => {
            setGif(!gif);
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
      <div style={{ margin: "5px" }}>
        {graph ? <Graph style={{ margin: "5px" }} /> : null}
        {gif ? (
          <img
            src="https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA=="
            alt="gif"
            height={300}
            style={{ margin: "5px" }}
          />
        ) : null}
      </div>
    </>
  );
}
export { ShowDialog };
