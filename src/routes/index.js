import { Route, Routes as DomRoutes } from "react-router-dom";
import Home from "../pages/index";
import Dashboard from "../pages/dashboard";
import Events from "../pages/events/index";
import CreateEvents from "../pages/events/create";
import Portalys1 from "../pages/portalys/portalys1";
import Portalys2 from "../pages/portalys/portalys2";
import Seat from "../pages/booking/seat";
import Detail from "../pages/booking/detail";
import Payment from "../pages/booking/detail";
import Tickets from "../pages/tickets";
import About from "../pages/portalys/about";
const Routes = (props) => {
  return (
    <DomRoutes>
      <Route key="home" path="/" element={<Home {...props} />} />
      <Route key="organizer" path="organizer" element={<Home {...props} />} />
      <Route key="newevents" path="newevents" element={<Portalys1 />} />
      <Route key="eventdetail" path="eventdetail" element={<Portalys2 />} />
      <Route key="dashboard" path="dashboard" element={<Dashboard {...props} />} />
      <Route key="events" path="events" element={<Events {...props} />} />
      <Route key="createEvent" path="events/create" element={<CreateEvents {...props} />} />
      <Route key="bookingSeat" path="booking/seat" element={<Seat {...props} />} />
      <Route key="bookingDetail" path="booking/detail" element={<Detail {...props} />} />
      <Route key="tickets" path="mytickets" element={<Tickets {...props} />} />
      <Route path="about" element={<About />} />

      <Route path="resetpassword" element={<Home />} />
    </DomRoutes>
  );
};

export default Routes;
