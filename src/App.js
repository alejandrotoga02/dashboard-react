import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  DashboardNorte,
  DashboardSur
} from "./content/control-accesos";
import Layout from "./content/Layout";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's homepage!</p>
          </main>
        }
      />
      <Route path="accesos" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="norte" element={<DashboardNorte />} />
        <Route path="sur" element={<DashboardSur />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
