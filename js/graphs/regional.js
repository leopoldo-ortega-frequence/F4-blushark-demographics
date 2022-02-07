export const regional = (selector, data) => {
  const circlesPerLine = 10;
  const regionalG = selector.append("g").attr("transform", `translate(600,20)`);
  let lastYval = 90;
  // a bit hacky
  const imgYVal = [120, 255, 325, 415, 475];
  // seperator line
  regionalG
    .append("line")
    .style("stroke", "#333")
    .style("stroke-width", 1)
    .attr("x1", 0)
    .attr("y1", 10)
    .attr("x2", 0)
    .attr("y2", 590);
  const color = d3
    .scaleOrdinal()
    .range(["#ffbb52", "#4a4a4a", "#45bcfe", "#fe9f31", "#609eeb"]);

  regionalG
    .append("text")
    .attr("x", 200)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("font-size", "1.4rem")
    .attr("fill", "#fe9f31")
    .text("Regional Insights");
  // seperator line
  regionalG
    .append("line")
    .style("stroke", "#333")
    .style("stroke-width", 1)
    .attr("x1", 100)
    .attr("y1", 40)
    .attr("x2", 300)
    .attr("y2", 40);
  data.forEach((d, i) => {
    generateGraph(d, i);
  });

  function generateGraph(data, idx) {
    const dataName = Object.keys(data);
    const dataLength = data[dataName].length;
    const graphSize = dataLength * 26;

    // create a new group for each instance
    const graphG = regionalG
      .append("g")
      .attr("transform", `translate(20, ${lastYval})`)
      .selectAll(".region-data")
      .data(data[dataName])
      .enter();

    const gEnter = graphG.append("g");
    const graphLine = gEnter.attr(
      "transform",
      (d, i) => `translate(0,${i * 20})`
    );

    graphLine
      .append("text")
      .attr("transform", `translate(290,5)`)
      .attr("font-size", "12px")
      .text((d) => d.name);
    // creating circles
    for (let x = 0; x < circlesPerLine; x++) {
      const radius = 8;
      graphLine
        .append("circle")
        .attr("cx", 80 + x * radius * 2.6)
        .attr("r", radius)
        .attr("fill", function (d) {
          if (d.value / 10 > x) {
            return color(idx);
          } else {
            return "#dbdbdb";
          }
        });
    }

    //append svg here
    regionalG
      .append("image")
      .attr("xlink:href", `./assets/${dataName}.svg`)
      .attr("x", 20)
      .attr("y", `${imgYVal[idx]}`)
      .attr("width", 50)
      .attr("height", 50);

    lastYval = graphSize + lastYval;
  }
};
