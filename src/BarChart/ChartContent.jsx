import React from 'react';
import './styles.less'

/**
 * @param {{ data: any; }} props
 */
export function ChartContent(props) {
  const { data } = props;

  return (
    <div className="chart-content">
      <div className="chart-content-inner">
        {Object.keys(data)?.length ? (
          Object.keys(data).map((key) => (
            <div className="chart-column" key={key}>
              <div className="chart-column-label">{data[key].label}</div>
              <div className="chart-column-grid">
                <div
                  className={`chart-column-val ${data[key].color}`}
                  style={{ height: `${data[key].value}%` }}
                />
              </div>
              <div className="chart-column-value">
                {data[key].value} {data[key].percentage && '%'}
              </div>
            </div>
          ))
        ) : (
          <div className="chart-content-no-data">Not included</div>
        )}
      </div>
    </div>
  );
}