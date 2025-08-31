"use client";
import React, { useState } from "react";

const TabsDesign = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex justify-between gap-10">
      {/* Left Sidebar = Tabs */}
      <div className="left-sidebar w-[250px] backdrop-blur-2xl border border-gray-400 rounded-[5px] p-4">
        <div className="tabs tabs-boxed flex-col gap-2">
          {data.map((article, index) => (
            <button
              key={article.id}
              className={`tab ${
                activeTab === index ? "tab-active text-[#24cfa6]" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {article.question}
            </button>
          ))}
        </div>
      </div>

      {/* Right Sidebar = Tab Content */}
      <div className="right-sidebar flex-1 w-[450px] overflow-y-auto p-6 border rounded-[5px]">
        <p className="mb-3">{data[activeTab].commonLine},</p>
        <h2 className="mb-3 text-2xl font-semibold">
          {data[activeTab].heading}।
        </h2>

        {/* Paragraphs */}
        <div className="py-3">
          {data[activeTab].paragraphs?.map((p, i) => (
            <p key={i} className="mb-2 text-gray-400">
              {p}
            </p>
          ))}
        </div>

        {/* Examples */}
        {data[activeTab].examples?.map((ex, i) => (
          <div key={i} className="mb-4">
            {ex.title && (
              <h4 className="font-semibold mb-1 mt-3 text-amber-700">
                {ex.title}
              </h4>
            )}
            {ex.code.map((line, j) => (
              <pre
                key={j}
                className="bg-gray-800 text-white p-2 rounded mb-1 overflow-x-auto ps-6 whitespace-pre-line"
              >
                {line}
              </pre>
            ))}
          </div>
        ))}

        {/* Paragraphs 2 */}
        <div className="py-3">
          {data[activeTab].paragraphs2?.map((p, i) => (
            <p key={i} className="mb-2 text-gray-400">
              {p}
            </p>
          ))}
        </div>

        {/* example 2 */}
        {data[activeTab].examples2?.map((ex, i) => (
          <div key={i} className="mb-4">
            {ex.code.map((line, j) => (
              <pre
                key={j}
                className="bg-gray-800 text-white p-2 rounded mb-1 overflow-x-auto whitespace-pre-line"
              >
                {line}
              </pre>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsDesign;
