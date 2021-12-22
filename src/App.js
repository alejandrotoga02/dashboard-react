import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DashboardNorte from "./components/DashboardNorte";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/norte" element={<DashboardNorte />} />
      </Routes>
      
    </Layout>
  );
};

export default App;
