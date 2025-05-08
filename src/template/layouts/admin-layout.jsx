import React from "react";
import { Outlet } from "react-router-dom";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import Styles from "../../asset/styles/admin/AdminLayout.module.scss";

export default function AdminLayout() {
  return (
    <div className={Styles.adminLayout}>
      <aside className={Styles.sidebar}>
        <SidebarAdmin />
      </aside>
      <main className={Styles.mainContent}>
        <Outlet /> {/* Render các route con của Admin */}
      </main>
    </div>
  );
}
