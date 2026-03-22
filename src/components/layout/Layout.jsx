import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col gap-4">
        <h2 className="text-xl font-bold">Productivity App</h2>

        <nav className="flex flex-col gap-2">
          <a href="/dashboard" className="hover:bg-gray-700 p-2 rounded">
            Dashboard
          </a>
          <a href="/user" className="hover:bg-gray-700 p-2 rounded">
            User Page
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">{children}</main>
    </div>
  );
}