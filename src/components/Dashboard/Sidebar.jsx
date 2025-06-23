'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SideClose from '../../../public/icons/SideClose';
import HomeIcon from '../../../public/icons/HomeIcon';
import MarketIcon from '../../../public/icons/MarketIcon';
import CustomerIcon from '../../../public/icons/CustomerIcon';
import CustomerImpulseIcon from '../../../public/icons/CustomerImpulseIcon';
import CommandEdgeIcon from '../../../public/icons/CommandEdgeIcon';
import IntegrationIcon from '../../../public/icons/IntegrationIcon';
import UserIcon from '../../../public/icons/UserIcon';
import SettingsIcon from '../../../public/icons/SettingsIcon';

const navItems = [
  { name: 'Overview', path: '/dashboard', icon: <HomeIcon /> },
  {
    name: 'Market Overview',
    path: '/dashboard/market-overview',
    icon: <MarketIcon />,
  },
  {
    name: "Competitor's Insight",
    path: '/dashboard/customers-insight',
    icon: <CustomerIcon />,
  },
  { name: "Customer's Pulse", path: '/pulse', icon: <CustomerImpulseIcon /> },
  { name: 'Command Edge', path: '/command', icon: <CommandEdgeIcon /> },
  { name: 'Integration', path: '/integration', icon: <IntegrationIcon /> },
  { name: 'Teams and Roles', path: '/teams', icon: <UserIcon /> },
  { name: 'Settings', path: '/settings', icon: <SettingsIcon /> },
];

export default function Sidebar({ collapsed, toggleSidebar }) {
  const pathname = usePathname();

  return (
    <div className="manrope">
      {/*Mobile Toggle Button 
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar}>
          <SideClose />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={` h-[100dvh] md:flex flex-col hidden top-0 left-0 bg-white border-r-[1px] border-gray-300 z-40
          transition-all duration-300 ease-in-out
          ${collapsed ? 'w-[70px]' : 'w-[280px]'}
          ${collapsed ? 'md:block' : 'md:block'} 
          ${collapsed ? 'hidden md:block' : 'block'}
        `}
      >
        <div className="flex items-center justify-between p-7">
          {!collapsed && <h3 className="text-xl font-bold">InspireEdge</h3>}
          <button onClick={toggleSidebar} className="md:block hidden ">
            <SideClose />
          </button>
        </div>

        <nav
          className={`mt-4 flex flex-col space-y-2 
              ${collapsed ? 'px-2' : 'px-7'}`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.name} href={item.path}>
                <div
                  className={`
                    flex items-center gap-4 p-3 rounded-xl cursor-pointer
                    ${
                      isActive
                        ? 'bg-lime-300 text-black-100'
                        : 'text-black-200 hover:bg-gray-100'
                    }
                    ${collapsed ? 'justify-center' : ''}
                  `}
                  title={collapsed ? item.name : ''}
                >
                  <span>{item.icon}</span>
                  {!collapsed && <span>{item.name}</span>}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
