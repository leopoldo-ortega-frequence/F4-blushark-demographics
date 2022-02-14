import { circleGraph } from "./graphs/circle.js";
import { regional } from "./graphs/regional.js";
import { circleData, graphData } from "./data.js";
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
const circleG = svg.append("g").attr("class", "circle-graph-container");
const graphG = svg.append("g").attr("class", "insight-graph-container");

const renderGraphs = () => {
  circleGraph(circleG, circleData);
  regional(graphG, graphData);
};

renderGraphs();
