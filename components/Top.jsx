import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckBox from "./CheckBox";
import Chart from "./Chart";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const Top = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkboxs, setCheckboxs] = useState();
  const [prefCodeData, setPrefCodeData] = useState({
    name: null,
    code: null,
  });
  const [selectedState, setSelectedState] = useState(Array(47).fill(false));
  const [populationData, setPopulationData] = useState([]);
  let chart = <Chart data={populationData} />;

  const year = [
    1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015,
    2020, 2025, 2030, 2035, 2040, 2045,
  ];

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": apiKey },
      })
      .then((res) => {
        setIsLoading(false);
        setCheckboxs(
          res.data.result.map((prefectureInfomation) => (
            <CheckBox
              value={prefectureInfomation}
              updateData={setPrefCodeData}
            />
          ))
        );
      });
  }, []);

  useEffect(() => {
    if (prefCodeData.code !== null) {
      let copySelectedState = selectedState.slice();
      copySelectedState[prefCodeData.code - 1] =
        !copySelectedState[prefCodeData.code - 1];
      if (copySelectedState[prefCodeData.code - 1]) {
        axios
          .get(
            "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=" +
              prefCodeData.code,
            {
              headers: { "X-API-KEY": apiKey },
            }
          )
          .then((res) => {
            let tmp = [];
            for (let j = 0; j < 18; j++) {
              tmp.push(res.data.result.data[0].data[j].value);
            }
            const res_series = {
              name: prefCodeData.name,
              data: tmp,
              year: year,
            };
            setPopulationData([...populationData, res_series]);
          });
      } else {
        let copyPopulationData = populationData.slice();
        for (let i = 0; i < copyPopulationData.length; i++) {
          if (copyPopulationData[i].name === prefCodeData.name) {
            copyPopulationData.splice(i, 1);
          }
        }
        setPopulationData(copyPopulationData);
      }
      chart = <Chart data={populationData} />;
      setSelectedState(copySelectedState);
    }
  }, [prefCodeData]);

  return (
    <>
      <p>都道府県</p>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="checkbox">{checkboxs}</div>
        )}
      </div>
      {chart}
    </>
  );
};

export default Top;
