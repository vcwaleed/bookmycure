import PopularHealthPackages from "../components/admin/PopularHealthPackages";

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PopularHealthPackages/>
      </div>
    </div>
  );
};

export default AdminDashboard;