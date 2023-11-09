import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getproduct } from './action/product'

import Spinner from './Spinner'
import PieChart, { Series, Tooltip, Export } from 'devextreme-react/pie-chart'
import {
  Chart,
  CommonSeriesSettings,
  SeriesTemplate,
  Title,
} from 'devextreme-react/chart'

import TooltipTemplate from './TooltipTemplate.js'

const App = ({ product: { products, loading }, getproduct }) => {
  const customizeTooltip = (arg) => {
    console.log('arg', arg)
    return {
      text: `Title :${arg.argumentText} , Price: ${arg.value}`,
    }
  }

  useEffect(() => {
    getproduct()
  }, [getproduct])
  return (
    <>
      <div style={{ margin: '20px' }}>
        <PieChart
          id="pie-chart"
          dataSource={products}
          title=" Interactive Data Visualization "
          palette="Bright"
        >
          <Series argumentField="title" valueField="price" />
          <Tooltip enabled={true} contentRender={TooltipTemplate} />
          <Export enabled={true} />
        </PieChart>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ maring: '20px' }}>
          <Chart id="chart" palette="Soft" dataSource={products}>
            <CommonSeriesSettings
              argumentField="title"
              valueField="price"
              type="bar"
              ignoreEmptyPoints={true}
            />
            <SeriesTemplate nameField="category" />
            <Title text="Interactive Data Visualization" />
            <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
          </Chart>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  product: state.product,
})

export default connect(mapStateToProps, { getproduct })(App)
