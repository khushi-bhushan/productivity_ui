import React from "react";
import { timecardData } from "../services/dummyData";
import Layout from "../components/layout/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {timecardData.map((timecard, idx) => (
        <div key={idx} className="mb-8">
          {/* Date header */}
          <h2 className="text-2xl font-semibold mb-4">{timecard.date}</h2>

          {/* Activities grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {timecard.activities.map((activity, aIdx) => (
              <div key={aIdx} className="bg-white p-4 rounded shadow-md">
                <h3 className="text-xl font-semibold">{activity.activity}</h3>
                <p className="text-gray-600">{activity.description}</p>
                <p className="mt-2 font-bold">{activity.hours} hours</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}