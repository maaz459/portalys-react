import DashboardLayout from "../../modules/layout/dashboard";
import EventsComponent from "../../modules/pages/Events/index";
const Events = () => {
  return (
    <DashboardLayout dashboardName="Events">
      <EventsComponent />;
    </DashboardLayout>
  );
};

export default Events;
