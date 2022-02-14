export const circleData = [
  { name: "age", range: "18-62", value: Math.floor(Math.random() * 40) + 30 },
  { name: "gender", range: "ALL", value: 100 },
  {
    name: "income",
    range: "50-150k",
    value: Math.floor(Math.random() * 40) + 40,
  },
  {
    name: "parenting",
    range: "Has Kids",
    value: Math.floor(Math.random() * 30) + 30,
  },
  { name: "education", range: "ALL", value: 100 },
];

export const graphData = [
  {
    people: [
      {
        name: "18-24",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "19-24",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "25-34",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "35-44",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "45-54",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "55-64",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "65+",
        value: Math.ceil(Math.random() * 10) * 10,
      },
    ],
  },
  {
    gender: [
      {
        name: "male",
        value: 50,
      },
      {
        name: "female",
        value: 50,
      },
    ],
  },
  {
    income: [
      {
        name: "0-50k",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "50-100k",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "100-150k",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "150k+",
        value: Math.ceil(Math.random() * 10) * 10,
      },
    ],
  },
  {
    family: [
      {
        name: "No Kids",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "Kids",
        value: Math.ceil(Math.random() * 10) * 10,
      },
    ],
  },
  {
    education: [
      {
        name: "No college",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "undergrad",
        value: Math.ceil(Math.random() * 10) * 10,
      },
      {
        name: "grad school",
        value: Math.ceil(Math.random() * 10) * 10,
      },
    ],
  },
];
