const assert = require('assert');
const { JSDOM } = require('jsdom');
const { Canvas } = require('canvas');

// Doğrudan modül ismini kullanın
const DataVisualizationSuite = require('../index');

describe('DataVisualizationSuite', () => {
  // Test case for drawLineChart function
  it('should draw a line chart on canvas', () => {
    // Sample data
    const data = [10, 20, 15, 30, 25, 40];

    // Create a DOM environment with canvas support
    const dom = new JSDOM('<!DOCTYPE html><html><body><canvas id="chartCanvas"></canvas></body></html>', {
      resources: 'usable',
      runScripts: 'dangerously',
    });

    // Override the default canvas with the 'canvas' package
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
    global.HTMLCanvasElement = Canvas;

    // Draw the line chart
    DataVisualizationSuite.drawLineChart(data, {
      canvasId: 'chartCanvas',
      lineColor: 'rgba(255, 0, 0, 1)',
      lineWidth: 3,
    });

    // Get the canvas context
    const canvas = document.getElementById('chartCanvas');
    const ctx = canvas.getContext('2d');

    // Check if the line chart is drawn correctly
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    // For simplicity, just check if the red color is present in the drawn chart
    const redPixelExists = imageData.some((value, index) => index % 4 === 0 && value === 255);

    assert.strictEqual(redPixelExists, true);
  });
});
