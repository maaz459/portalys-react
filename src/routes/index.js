import { Route, Routes as DomRoutes } from "react-router-dom";
import Home from "../pages/index";
import Dashboard from "../pages/dashboard";
import Events from "../pages/events/index";
import CreateEvents from "../pages/events/create";
import Portalys1 from "../pages/portalys/portalys1";
import Portalys2 from "../pages/portalys/portalys2";
import About from "../pages/portalys/about";
const Routes = () => {
  return (
    <DomRoutes>
      <Route key="home" path="/" element={<Home />} />
      <Route key="organizer" path="organizer" element={<Home />} />
      <Route
        key="portalys1"
        path="portalys1"
        element={<Portalys1 />}
      />
         <Route
        key="portalys2"
        path="portalys2"
        element={<Portalys2 />}
      />
      <Route key="dashboard" path="dashboard" element={<Dashboard />} />
      <Route key="events"  path="events" element={<Events />} />
      <Route
        key="createEvent"
        path="events/create"
        element={<CreateEvents />}
      />
      <Route
        path="resetpassword"
        element={<Home />}
      />
         <Route
        path="about"
        element={<About />}
      />
        
    </DomRoutes>
  );
};

export default Routes;
