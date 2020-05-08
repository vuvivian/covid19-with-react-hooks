/*
 * @Author: vuvivian
 * @Date: 2020-05-08 11:41:40
 * @LastEditors: vuvivian
 * @LastEditTime: 2020-05-08 12:40:51
 * @Descripttion: 工具
 * @FilePath: /covid19-with-react-hooks/src/tools/util.js
 */
const transformHistory = (timeline = {}) => {
  return Object.entries(timeline).map((entry) => {
    const [time, number] = entry;
    return {time, number};
  });
}

export default transformHistory;