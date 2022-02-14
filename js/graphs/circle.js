export const circleGraph = (selector, data) => {
  const width = 600;
  const height = 640;
  const xOffset = 100;
  const yOffset = 30;
  let parentRadius = Math.min(width, height) / 2.8;

  const graphInfoL1 = "Targetting 26.2%";
  const graphInfoL2 = "of total population";

  const circleGraphG = selector
    .append("g")
    .attr(
      "transform",
      `translate(${parentRadius + xOffset}, ${parentRadius + yOffset})`
    );
  const color = d3
    .scaleOrdinal()
    .range(["#ffbb52", "#4a4a4a", "#45bcfe", "#fe9f31", "#609eeb"]);

  // data displaying inside the graph

  circleGraphG
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(0,-10)")
    .attr("font-weight", "bold")
    .attr("fill", "#fe9f31")
    .text(graphInfoL1);
  circleGraphG
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(0,10)")
    .attr("font-weight", "bold")
    .attr("fill", "#fe9f31")
    .text(graphInfoL2);

  // create text data for graph
  const insightG = selector
    .append("g")
    .attr(
      "transform",
      `translate(${xOffset - 50}, ${(parentRadius + yOffset) * 2})`
    );
  const insightInfoG = insightG
    .selectAll(".insight-data")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "insight-data");
  insightInfoG
    .append("text")
    .attr("x", (d, i) => (i % 2 === 0 ? 0 : 320))
    .attr("y", function (d, i) {
      if (i < 2) {
        return 0;
      } else if (i < 4) {
        return 50;
      } else {
        return 100;
      }
    })
    .attr("font-size", "12px")
    .attr("fill", (d, i) => color(i))
    .text((d) => `${d.name.toUpperCase()}: ${d.total}% OF POPULATION`);
  insightInfoG
    .append("text")
    .attr("x", (d, i) => (i % 2 === 0 ? 0 : 320))
    .attr("y", function (d, i) {
      if (i < 2) {
        return 20;
      } else if (i < 4) {
        return 70;
      } else {
        return 120;
      }
    })
    .attr("fill", "#4a4a4a")
    .text((d) => d.range);
  insightInfoG
    .append("circle")
    .attr("cx", (d, i) => (i % 2 === 0 ? -25 : 290))
    .attr("cy", function (d, i) {
      if (i < 2) {
        return 0;
      } else if (i < 4) {
        return 50;
      } else {
        return 100;
      }
    })
    .attr("font-size", "12px")
    .attr("r", 12)
    .attr("fill", (d, i) => color(i));

  // draws the graph onto the screen
  const render = (d) => {
    console.log(d);
    d.forEach((d, i) => {
      const circleG = circleGraphG.append("g");
      //circleG.attr("transform", `translate(${i * 40},${i * 40})`);
      const values = [];
      values.push(d.value);
      values.push(100 - d.value);

      const pie = d3.pie();

      const radius = parentRadius - i * 30;
      const arc = d3
        .arc()
        .outerRadius(radius) // chops offf outer circle
        .innerRadius(radius - 15); // chops off innrer circle, use this to convert pie chart to donut

      const arcs = circleG
        .selectAll("arc")
        .data(pie(values))
        .enter()
        .append("g")
        .attr("class", `arc`);

      arcs
        .append("path")
        .style("fill", function (d) {
          return d.value === values[0] ? color(i) : "#dbdbdb";
        })
        .attr("d", arc)
        .attr("stroke-width", 6);
    });
  };

  render(data);
};
