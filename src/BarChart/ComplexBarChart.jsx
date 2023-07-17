import React from 'react';
import { Tabs } from 'antd';
import { ChartContent } from './ChartContent';
import './styles.less';

const { TabPane } = Tabs;

/**
 * @param {{ [x: string]: { data: any; label: string }; }} data
 */
function renderSubTabs(data) {
  return (
    <Tabs defaultActiveKey="current" tabPosition="bottom" className="sub-tabs">
      {Object.keys(data).map((key) => (
        <TabPane tab={data[key].label} key={data[key].label}>
          <ChartContent data={data[key].data} />
        </TabPane>
      ))}
    </Tabs>
  );
}

/**
 * @param {{ data: any; }} props
 */
function ComplexBarChart(props) {
  const { data } = props;

  return (
    <div className="diversely-bar-char">
      <Tabs defaultActiveKey="current">
        {data &&
          Object.keys(data).map((key) => (
            <TabPane tab={data[key].label} key={data[key].id}>
              {renderSubTabs(data[key].data)}
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
}

export default ComplexBarChart

