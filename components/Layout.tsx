import React from "react";
import { motion } from "framer-motion";

export const Layout: React.FC<{ sidebar: React.ReactNode; children: React.ReactNode }> = ({ sidebar, children }) => {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-zinc-950/60 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">AI Lab Prototype</div>
          <a href="https://github.com" className="text-sm underline decoration-dotted">Docs</a>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.aside
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:col-span-4 xl:col-span-3"
        >
          <div className="rounded-2xl border p-4 sticky top-24 max-h-[70vh] overflow-auto">{sidebar}</div>
        </motion.aside>
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="lg:col-span-8 xl:col-span-9"
        >
          <div className="rounded-2xl border p-4">{children}</div>
        </motion.section>
      </main>
      <footer className="border-t py-6 text-center text-xs text-zinc-500">
        Frontend-only demo • No real API calls
      </footer>
    </div>
  );
};