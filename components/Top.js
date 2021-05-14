import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckBox from "./CheckBox";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const Top = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkboxs, setCheckboxs] = useState();

  console.log(apiKey);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": apiKey },
      })
      .then((res) => {
        setIsLoading(false);
        setCheckboxs(
          res.data.result.map((prefectureInfomations) => (
            <CheckBox value={prefectureInfomations.prefName} />
          ))
        );
      });
  }, []);

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
    </>
  );
};

export default Top;
