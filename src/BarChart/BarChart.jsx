import { Tabs } from 'antd';
import React from 'react';
import { ChartContent } from './ChartContent';
import './styles.less';

const { TabPane } = Tabs;

/**
 * @param {{ data: any }} props
 */
export default function BarChart(props) {
  const { data } = props;

  return (
    <div className={`diversely-bar-char single-chart`}>
      <Tabs defaultActiveKey="current">
        {data &&
          Object.keys(data).map((key) => (
            <TabPane tab={data[key].label} key={data[key].id}>
              <ChartContent data={data[key].data} />
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
}
