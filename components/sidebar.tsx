"use client";

import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Terminal, 
  Settings, 
  Zap,
  Box,
  LayoutDashboard,
  Cloud
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: Activity, label: 'Real-time Logs', active: false },
  { icon: ShieldCheck, label: 'Security Drift', active: false },
  { icon: Box, label: 'Node Clusters', active: false },
  { icon: Zap, label: 'Self-Healing', active: false },
  { icon: Terminal, label: 'Ops Console', active: false },
];

export function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-slate-950 flex flex-col p-4 text-slate-400">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Cloud className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white uppercase italic">InfraPilot</span>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              item.active 
                ? "bg-blue-600/10 text-blue-400" 
                : "hover:bg-slate-900 hover:text-slate-200"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-800">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-900 transition-colors">
          <Settings className="w-4 h-4" />
          Settings
        </button>
      </div>
    </div>
  );
}
