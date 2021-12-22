import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DashboardNorte from "./components/DashboardNorte";
import DashboardSur from "./components/DashboardSur";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/norte" element={<DashboardNorte />} />
        <Route path="/sur" element={<DashboardSur />} />
      </Routes>
      
    </Layout>
  );
};

export default App;
