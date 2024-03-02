# Data Visualization Suite

[![License:MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://github.com/FurkanYildirim/data-visualization-suite/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/data-visualization-suite.svg)](https://www.npmjs.com/package/data-visualization-suite)

The Data Visualization Suite is a lightweight npm package designed for data visualization, featuring customizable line charts.

## Why

- Streamlined data visualization for various applications.
- Customizable line charts to suit specific needs.
- Easy integration into web projects.


## Features

- Simple and easy-to-use API for drawing line charts.
- Customizable chart properties such as line color and width.
- Works with HTML5 canvas.
- Supports various data sets.

## Installation

```shell
npm i --save 
```

## Usage

```javascript
const DataVisualizationSuite = require('data-visualization-suite');

// Example data set
const data = [10, 20, 15, 25, 18];

// Draw a line chart
DataVisualizationSuite.drawLineChart(data, {
  canvasId: 'chartCanvas',  // ID of the canvas element
  lineColor: 'rgba(75, 192, 192, 1)',  // Line color
  lineWidth: 2  // Line width
});
```

## API

### `DataVisualizationSuite.drawLineChart(data, options)`

Draws a line chart on a canvas element.

#### Parameters

- `data` (Array): An array of data points for the line chart.
- `options` (Object, optional): Options for configuring the line chart.
  - `canvasId` (String, default: 'chartCanvas'): ID of the canvas element.
  - `lineColor` (String, default: 'rgba(75, 192, 192, 1)'): Color of the line.
  - `lineWidth` (Number, default: 2): Width of the line.

This method draws a line chart using the provided data on a canvas element. You can customize the appearance of the chart using the optional `options` object, which includes properties such as `canvasId`, `lineColor`, and `lineWidth`. If not specified, default values will be used.

## Contributing

For issues, bugs or imporvements please open an [issue](https://github.com/FurkanYildirim/data-visualization-suite/issues/new)
