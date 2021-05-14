import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckBox from "./CheckBox";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const Top = () => {
  const [prefectureInfomation, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);
  const checkboxs = prefectureInfomation.map((prefectureInfomations) => (
    <CheckBox value={prefectureInfomations.prefName} />
  ));

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": apiKey },
      })
      .then((res) => {
        setData(res.data.result);
        setIsLoading(false);
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
