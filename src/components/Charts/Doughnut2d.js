
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data



const Doughnut2d = ({data}) => {
const chartConfigs = {
  type: "doughnut2d", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Stars Per Language",
      decimals: 0,
      doughnutRadius: "45%",
      showPercentValues: 0,
      theme: "candy"
    },
    data
  }
};
    return (<ReactFC {...chartConfigs} />);
  
}

export default Doughnut2d;