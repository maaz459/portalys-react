import DashboardLayout from "../../modules/layout/dashboard";
import CreateEvent from "../../modules/pages/Events/Create/index";
const CreateEvents = () => {
  return (
    <DashboardLayout dashboardName="Events">
      <CreateEvent />;
    </DashboardLayout>
  );
};

export default CreateEvents;
