import { Route, Routes } from "react-router-dom";
import {
  Layout,
  Dashboard,
  DashboardNorte,
  DashboardSur,
  Numeralia
} from "./content/control-accesos";
import {
  Layout as LayoutHecho,
  Hechos
} from "./content/hechos"
import General from "./content/frames/General";
import Historico from "./content/historico/Historico";
import { Finanzas, Layout as LayoutFinanzas } from "./content/finanzas";

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
        <Route path="numeralia" element={<Numeralia />} />
      </Route>
      <Route path="hechos" element={<LayoutHecho />}>
        <Route index element={<Hechos />} />
        <Route path="norte" element={<Hechos />} />
        <Route path="sur" element={<Hechos />} />
      </Route>
      <Route path="finanzas" element={<LayoutFinanzas />}>
        <Route index element={<Finanzas />} />
      </Route>
      <Route path="frames" element={<Layout />}>
        <Route index element={<General />} />
      </Route>
      <Route path="historico" element={<Historico />} />
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
