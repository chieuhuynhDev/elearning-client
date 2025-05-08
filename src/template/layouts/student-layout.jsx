import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";

export default function StudentLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Render các route con của Client */}
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
