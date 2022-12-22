import DashboardLayout from "../../modules/layout/dashboard";
import CreateEvent from "../../modules/pages/Events/Create/index";
const CreateEvents = (props) => {
  return (
    <DashboardLayout dashboardName="Events">
      <CreateEvent {...props} />;
    </DashboardLayout>
  );
};

export default CreateEvents;
