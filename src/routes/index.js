import { Route, Routes as DomRoutes } from "react-router-dom";
import Home from "../pages/index";
import Dashboard from "../pages/dashboard";
import Events from "../pages/events/index";
import CreateEvents from "../pages/events/create";
const Routes = () => {
  return (
    <DomRoutes>
      <Route key="home" path="/" element={<Home />} />
      <Route key="home" path="organizer" element={<Home />} />
      <Route key="dashboard" path="dashboard" element={<Dashboard />} />
      <Route key="events" path="events" element={<Events />} />
      <Route key="createEvent" path="events/create" element={<CreateEvents />} />
    </DomRoutes>
  );
};

export default Routes;
