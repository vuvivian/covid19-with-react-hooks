/*
 * @Author: vuvivian
 * @Date: 2020-05-07 14:37:58
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-07 15:10:08
 * @Descripttion: 获取并展示全球数据概况（每 5 秒重新获取一次)
 * @FilePath: /covid19-with-react-hooks/src/components/GlobalStats.jsx
 */
import React from "react";

function Stat({ number, color }) {
  return <span style={{ color: color, fontWeight: "bold" }}>{number}</span>;
}

const GlobalStats = ({ stats }) => {
  const { cases, deaths, recovered, active, updated } = stats;
  return (
    <div className='global-stats'>
      <small>Updated on {new Date(updated).toLocaleString()}</small>
      <table>
        <tbody>
          <tr>
            <td>
              Cases: <Stat number={cases} color='red' />
            </td>
            <td>
              Deaths: <Stat number={deaths} color='gray' />
            </td>
            <td>
              Recovered: <Stat number={recovered} color='green' />
            </td>
            <td>
              Active: <Stat number={active} color='orange' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GlobalStats;