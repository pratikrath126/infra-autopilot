"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cpu, 
  Database, 
  Globe,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

const stats = [
  { label: 'Uptime', value: '99.99%', icon: Globe, color: 'text-emerald-500' },
  { label: 'Instances', value: '124', icon: Server, color: 'text-blue-500' },
  { label: 'CPU Load', value: '42%', icon: Cpu, color: 'text-amber-500' },
  { label: 'DB Latency', value: '12ms', icon: Database, color: 'text-indigo-500' },
];

export function Dashboard() {
  return (
    <div className="flex-1 overflow-auto p-8 bg-slate-900 text-white">
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Infrastructure Overview</h1>
          <p className="text-slate-400 mt-1">Autonomous monitoring active across 3 regions.</p>
        </div>
        <div className="flex gap-3 text-xs font-medium uppercase tracking-wider">
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Systems Healthy
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={stat.color} size={20} />
              <span className="text-[10px] font-bold text-slate-500 uppercase">Live</span>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h2 className="font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="text-amber-500 w-4 h-4" />
              Recent Anomaly Detections
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-amber-500/10 flex items-center justify-center">
                      <AlertTriangle className="text-amber-500 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">High latency on `db-prod-01`</div>
                      <div className="text-xs text-slate-500">Detected in us-east-1 • 14:22:05</div>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-blue-400 hover:underline">ANALYZE</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-600 rounded-xl p-6 shadow-lg shadow-blue-900/20">
            <h2 className="font-bold text-lg mb-2">Autopilot Mode</h2>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              AI-driven remediation is enabled. 12 incidents resolved automatically this week.
            </p>
            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
              <CheckCircle2 className="text-white w-5 h-5" />
              <span className="text-xs font-medium">Auto-scaling group optimized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
