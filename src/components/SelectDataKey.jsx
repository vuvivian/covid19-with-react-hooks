/*
 * @Author: vuvivian
 * @Date: 2020-05-07 15:46:36
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-07 15:51:31
 * @Descripttion: 选择
 * @FilePath: /covid19-with-react-hooks/src/components/SelectDataKey.jsx
 */
import React from "react";

const SelectDataKey = ({onChange}) => {
  return (
    <>
      <label htmlFor="key-select">select a key for sorting:</label>
      <select id="key-select" onChange={onChange}>
        <option value="cases">cases</option>
        <option value="todayCases">todayCases</option>
        <option value="deaths">deaths</option>
        <option value="recovered">recovered</option>
        <option value="active">active</option>
      </select>
    </>
  );
}

export default SelectDataKey;