import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export const Top = () => {
  useEffect(() => {
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": apiKey },
      })
      .then((res) => {
        console.log(apiKey);
        console.log(res);
      });
  }, []);
  return (
    <>
      <p>Top</p>
      <div>
        <label>
          <input type="checkbox" />
          北海道
        </label>
      </div>
    </>
  );
};
