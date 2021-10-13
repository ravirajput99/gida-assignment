import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";
function Graph() {
  return (
    <XYPlot width={300} height={300}>
      <HorizontalGridLines />
      <LineSeries
        data={[
          { x: 1, y: 10 },
          { x: 2, y: 5 },
          { x: 3, y: 15 },
          { x: 4, y: 4 },
        ]}
      />
      <XAxis />
      <YAxis />
    </XYPlot>
  );
}
export { Graph };
