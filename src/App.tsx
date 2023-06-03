import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  feedbackLoader,
  sunburstLoader,
  treeMapLoader,
  vacRateLoader,
  lineChartLoader,
  ComboChartLoader,
} from "./loaders";
import {
  Feedback,
  Overview,
  VaccinationRate,
  SunburstPage,
  TreemapPage,
  LineChartPage,
  ComboChartPage,
} from "./pages";
import { Container } from "./layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Container />}>
        <Route index element={<Overview />} />
        <Route
          path="/feedback"
          element={<Feedback />}
          loader={feedbackLoader}
        />
        <Route
          path="/sunburst"
          element={<SunburstPage />}
          loader={sunburstLoader}
        />
        <Route
          path="/treemap"
          element={<TreemapPage />}
          loader={treeMapLoader}
        />
        <Route
          path="/vaccination-rate"
          element={<VaccinationRate />}
          loader={vacRateLoader}
        />
        <Route
          path="/linechart"
          element={<LineChartPage />}
          loader={lineChartLoader}
        />
        <Route
          path="/combochart"
          element={<ComboChartPage />}
          loader={ComboChartLoader}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
