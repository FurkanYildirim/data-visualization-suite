class DataVisualizationSuite {
    /**
     * Draws a line chart on a canvas element.
     * @param {Array} data - The data set for the line chart.
     * @param {Object} options - Options for configuring the line chart.
     *   @param {string} [options.canvasId='chartCanvas'] - ID of the canvas element.
     *   @param {string} [options.lineColor='rgba(75, 192, 192, 1)'] - Color of the line.
     *   @param {number} [options.lineWidth=2] - Width of the line.
     */
    static drawLineChart(data, options = {}) {
      // Check if the data is a valid array with at least two elements
      if (!Array.isArray(data) || data.length < 2) {
        throw new Error('A valid data set is expected.');
      }
  
      // Get the canvas element based on the provided ID or use a default ID
      const canvasId = options.canvasId || 'chartCanvas';
      const canvas = document.getElementById(canvasId);
      
      // Check if the canvas element exists
      if (!canvas) {
        throw new Error(`Canvas element not found: ${canvasId}`);
      }
  
      // Get the 2D rendering context of the canvas
      const ctx = canvas.getContext('2d');
      
      // Get the width and height of the canvas
      const width = canvas.width;
      const height = canvas.height;
  
      // Calculate the scaling factors for x and y axes
      const xScale = width / (data.length - 1);
      const yScale = height / (Math.max(...data) - Math.min(...data));
  
      // Begin drawing the line chart
      ctx.beginPath();
  
      // Move to the starting point of the line chart
      ctx.moveTo(0, height - ((data[0] - Math.min(...data)) * yScale));
  
      // Draw the line chart by connecting each data point
      for (let i = 1; i < data.length; i++) {
        ctx.lineTo(i * xScale, height - ((data[i] - Math.min(...data)) * yScale));
      }
  
      // Set the line color and width
      ctx.strokeStyle = options.lineColor || 'rgba(75, 192, 192, 1)';
      ctx.lineWidth = options.lineWidth || 2;
  
      // Stroke the path to display the line chart
      ctx.stroke();
    }
  }
  
  // Export the DataVisualizationSuite class for use in other modules
  module.exports = DataVisualizationSuite;