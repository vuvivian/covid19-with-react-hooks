/*
 * @Author: vuvivian
 * @Date: 2020-05-07 15:39:33
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-07 16:19:13
 * @Descripttion: 展示多个国家的相关数据直方图
 * @FilePath: /covid19-with-react-hooks/src/components/CountriesChart.jsx
 */
import React from "react";
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts";

const CountriesChart = ({data, dataKey}) => {
  return (
    <BarChart width={730} height={250} data={data}>
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