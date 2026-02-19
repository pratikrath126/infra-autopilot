import { Sidebar } from "@/components/sidebar";
import { Dashboard } from "@/components/dashboard";

export default function Home() {
  return (
    <main className="flex h-screen bg-slate-950 text-white overflow-hidden font-sans">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
