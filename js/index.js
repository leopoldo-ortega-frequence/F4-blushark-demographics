import { circleGraph } from "./graphs/circle.js";
import { regional } from "./graphs/regional.js";
// here we will try and use a different approach
const MARGIN = { LEFT: 50, RIGHT: 40, TOP: 20, BOTTOM: 50 };
const WIDTH = 1000 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 640 - MARGIN.TOP - MARGIN.BOTTOM;

const svg = d3
  .select("#graph-container")
  .append("svg")
  .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
  .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM);

// create a group element
const g = svg
  .append("g")
  .attr("transform", `translate(${MARGIN.LEFT},${MARGIN.TOP})`);
// g element for each graph
const circleG = svg.append("g");
const graphG = svg.append("g");
d3.json("./js/data/data.json").then((data) => {
  circleGraph(circleG, data.circleData);
  regional(graphG, data.graphData);
});
