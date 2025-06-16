'use client';
import Sidebar from '@/components/Dashboard/Sidebar';
import Navbar from '@/components/Dashboard/Navbar';
import { useState } from 'react';

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className="flex ">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <main className=" w-full ">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="px-3 md:px-[28px] py-[21px]">{children}</div>
      </main>
    </div>
  );
}
