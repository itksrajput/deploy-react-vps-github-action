import { Route, Routes } from "react-router-dom";
import Dashboard from "../features/base/home";
import Sales from "../features/base/sales";
import MainLayout from "../features/layouts/main-layout";
import HowToUse from "../features/shared/how-to-use";

const Routing = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<Sales />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
      <Route path="/content" element={<HowToUse />} />
    </Routes>
  );
};

export default Routing;
