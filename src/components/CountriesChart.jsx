/*
 * @Author: vuvivian
 * @Date: 2020-05-07 15:39:33
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-08 14:55:44
 * @Descripttion: 展示多个国家的相关数据直方图
 * @FilePath: /covid19-with-react-hooks/src/components/CountriesChart.jsx
 */
import React, { useContext }  from "react";
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts";
import { AppDispatch } from "../App";

const CountriesChart = ({data, dataKey}) => {
  const dispatch = useContext(AppDispatch);

  function onClick(payload = {}) {
    if (payload.activeLabel) {
      dispatch({ type: "SET_COUNTRY", country: payload.activeLabel });
    }
  }
  
  return (
    <BarChart width={730} height={250} data={data} onClick={onClick}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="country" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey= {dataKey} fill="#8884d8" />
    </BarChart>
  );
}

export default CountriesChart;