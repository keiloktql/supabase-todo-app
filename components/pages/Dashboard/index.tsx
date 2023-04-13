import MainLayout from "@/components/layout/MainLayout";

const Dashboard = () => (
  <MainLayout>
    <div>
      <h1>This is dashboard</h1>
      <p>{}</p>
    </div>
  </MainLayout>
);

export default Dashboard;

Dashboard.requireAuth = true;
