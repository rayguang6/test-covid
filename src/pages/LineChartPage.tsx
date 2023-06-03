import { useLoaderData } from "react-router-dom";
import { LineChart } from "@carbon/charts-react";
import { ScaleTypes } from "@carbon/charts/interfaces";
import "@carbon/charts/styles.css";
import "@carbon/styles/css/styles.css";
import { LoaderData } from "../types";
import { lineChartLoader } from "../loaders";

const options = {
  title: "Stacked Line (Recovered & Active Cases)",
  points: {
    enabled: false,
    radius: 3,
  },
  axes: {
    bottom: {
      title: "Date",
      mapsTo: "date",
      scaleType: ScaleTypes.TIME,
    },
    left: {
      mapsTo: "value",
      title: "Cases",
      scaleType: ScaleTypes.LINEAR,
    },
  },
  curve: "curveMonotoneX",
  height: "80vh",
  zoomBar: {
    top: {
      enabled: true,
      initialZoomDomain: [
        new Date(new Date().getFullYear() - 1, 0, 1), //set auto zoom to 365 days before
        new Date() , // Set the current date
      ],
    },
  },
};

const LineChartPage = () => {
  const data = useLoaderData() as LoaderData<typeof lineChartLoader>;


  return (
    <div>
      <h1>my covid view</h1>
      <LineChart data={data} options={options} />
    </div>
  );
};

export default LineChartPage;
