import { Route, Routes as DomRoutes } from "react-router-dom";
import Home from "../pages/index";
import Dashboard from "../pages/dashboard";
import Events from "../pages/events/index";
import CreateEvents from "../pages/events/create";
import Seat from "../pages/booking/seat";
import Detail from "../pages/booking/detail";
import Payment from "../pages/booking/detail";
import Tickets from "../pages/tickets";
import About from "../pages/portalys/about";
import Faq from "../pages/portalys/faq";
import EventDetail from "../pages/portalys/eventdetail";
import NewsEvents from "../pages/portalys/newsevents";
import Profile2 from "../pages/profile/profile2";
import Profile from "../pages/profile/profile";
import Collaborate from "../pages/collaborate/collaborate";
import TicketsDetail from "../pages/ticketdetail/ticketdetail";
import FaqEventPlanner from "../pages/faq/faqeventplanner";
const Routes = (props) => {
  return (
    <DomRoutes>
      <Route key="home" path="/" element={<Home {...props} />} />
      <Route key="organizer" path="organizer" element={<Home {...props} />} />
      <Route key="newevents" path="newevents" element={<NewsEvents />} />
      <Route key="eventdetail" path="newevents/:id" element={<EventDetail />} />
      <Route key="dashboard" path="dashboard" element={<Dashboard {...props} />} />
      <Route key="events" path="events" element={<Events {...props} />} />
      <Route key="createEvent" path="events/create" element={<CreateEvents {...props} />} />
      <Route key="bookingSeat" path="booking/seat" element={<Seat {...props} />} />
      <Route key="bookingDetail" path="booking/detail" element={<Detail {...props} />} />
      <Route key="tickets" path="mytickets" element={<Tickets {...props} />} />
      <Route path="ourvision" element={<About />} />
      <Route path="faq" element={<Faq />} />
      <Route path="faqeventplanner" element={<FaqEventPlanner />} />
      <Route path="settings" element={<Profile />} />
      <Route path="profile2" element={<Profile2 />} />
      <Route path="collaborate" element={<Collaborate />} />
      <Route path="ticketdetail" element={<TicketsDetail />} />
      <Route path="resetpassword" element={<Home />} />
    </DomRoutes>
  );
};

export default Routes;
