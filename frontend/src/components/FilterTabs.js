import React from "react";

const FilterTabs = ({ filter, setFilter }) => {
  const tabs = ["All", "Active", "Completed"];
  return (
    <div className="flex space-x-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-3 py-1 rounded-md font-semibold transition-colors ${
            filter === tab
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => setFilter(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
