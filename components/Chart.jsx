import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export const Sample = (props) => {
  const recieveDatas = props.data;

  const options = {
    title: { text: "都道府県別人口推移グラフ" },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointInterval: 5,
        pointStart: 1965,
      },
    },
    series: recieveDatas,
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      className="chart"
    />
  );
};

export default Sample;
