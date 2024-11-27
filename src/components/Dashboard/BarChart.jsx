import { ResponsiveAreaBump } from "@nivo/bump";

const BarChart = () => {
  const data = [
    {
      id: "JavaScript",
      data: [
        {
          x: 2019,
          y: 26,
        },
        {
          x: 2020,
          y: 13,
        },
        {
          x: 2021,
          y: 12,
        },
        {
          x: 2022,
          y: 22,
        },
        {
          x: 2023,
          y: 16,
        },
        {
          x: 2024,
          y: 11,
        },
      ],
    },
    {
      id: "ReasonML",
      data: [
        {
          x: 2019,
          y: 10,
        },
        {
          x: 2020,
          y: 17,
        },
        {
          x: 2021,
          y: 21,
        },
        {
          x: 2022,
          y: 21,
        },
        {
          x: 2023,
          y: 12,
        },
        {
          x: 2024,
          y: 26,
        },
      ],
    },
    {
      id: "TypeScript",
      data: [
        {
          x: 2019,
          y: 30,
        },
        {
          x: 2020,
          y: 20,
        },
        {
          x: 2021,
          y: 19,
        },
        {
          x: 2020,
          y: 15,
        },
        {
          x: 2022,
          y: 15,
        },
        {
          x: 2024,
          y: 30,
        },
      ],
    },
    {
      id: "Elm",
      data: [
        {
          x: 2019,
          y: 20,
        },
        {
          x: 2020,
          y: 25,
        },
        {
          x: 2021,
          y: 16,
        },
        {
          x: 2022,
          y: 24,
        },
        {
          x: 2023,
          y: 15,
        },
        {
          x: 2024,
          y: 11,
        },
      ],
    },
    {
      id: "CoffeeScript",
      data: [
        {
          x: 2019,
          y: 15,
        },
        {
          x: 2020,
          y: 19,
        },
        {
          x: 2021,
          y: 11,
        },
        {
          x: 2022,
          y: 15,
        },
        {
          x: 2023,
          y: 11,
        },
        {
          x: 2024,
          y: 26,
        },
      ],
    },
  ];

  return (
    <div style={{ height: "400px" }}>
      <ResponsiveAreaBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={{ scheme: "nivo" }}
        blendMode="multiply"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "CoffeeScript",
            },
            id: "dots",
          },
          {
            match: {
              id: "TypeScript",
            },
            id: "lines",
          },
        ]}
        startLabel="id"
        endLabel="id"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
      />
    </div>
  );
};

export default BarChart;
