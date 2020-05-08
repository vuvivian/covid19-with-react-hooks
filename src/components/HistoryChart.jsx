/*
 * @Author: vuvivian
 * @Date: 2020-05-07 20:45:37
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-08 12:47:28
 * @Descripttion: 确诊病例 Cases、死亡病例 Deaths 和治愈病例 Recovered的历史趋势图
 * @FilePath: /covid19-with-react-hooks/src/components/HistoryChart.jsx
 */
import React from 'react';
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts';

// 枚举不同类型对应的视图颜色
const TITLE2COLOR = {
  Cases: "#D0021B",
  Deaths: "#4A4A4A",
  Recovered: "#09C79C",
};
/**
 * title 是图表标题
 * data 就是绘制图表需要的历史数据
 * lastDays 是显示过去 N 天的数据，可以通过 data.slice(-lastDays) 进行选择
 * onLastDaysChange 是用户通过 input 修改处理过去 N 天时的事件处理函数
 */
const HistoryChart = ({title, data, lastDays, onLastDaysChange}) => {
  const colorKey = `color${title}`;
  const color = TITLE2COLOR[title];
  
  return (
    <div>
      <AreaChart width={750} height={150} data={data.slice(-lastDays)}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={colorKey} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={color} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="number" stroke={color} fillOpacity={1}  fill={`url(#${colorKey})`} />
      </AreaChart>
      <h3>{title}</h3>
      <input type='range' min='1' max='30' value={lastDays} onChange={onLastDaysChange} />
      <span>Last {lastDays} days</span>
    </div>
  )
}

export default HistoryChart;