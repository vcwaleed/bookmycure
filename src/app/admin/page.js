"use client";
import PopularHealthPackages from "../components/admin/PopularHealthPackages";
import AdminReasonBannerEditor from "../components/admin/AdminReasonBannerEditor";
import AestheticWellnessClinics from "../components/admin/AestheticWellnessClinics";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const AdminDashboard = () => {
    const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      router.push("/login");
    }
  }, [router]);
  
  const handleUpdate = (data) => {
    console.log("Updated data:", data);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 gap-6">
        <PopularHealthPackages/>
        <AestheticWellnessClinics />
        <AdminReasonBannerEditor onUpdate={handleUpdate} />
      </div>
    </div>
  );
};

export default AdminDashboard;