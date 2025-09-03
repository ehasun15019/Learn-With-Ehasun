"use client";
import React, { useState } from "react";

const TabsDesign = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0); // page index (0 = first page)
  // item per-page
  const itemsPerPage = 8;

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <div className="flex justify-between gap-10">
        {/* Left Sidebar = Tabs */}
        <div className="left-sidebar w-[250px] backdrop-blur-2xl border border-gray-400 rounded-[5px] p-4">
          <div className="tabs tabs-boxed flex-col gap-2">
            {visibleData.map((article, index) => (
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
          <p className="mb-3">{visibleData[activeTab]?.commonLine},</p>
          <h2 className="mb-3 text-2xl font-semibold">
            {visibleData[activeTab]?.heading}।
          </h2>

          {/* Paragraphs */}
          <div className="py-3">
            {visibleData[activeTab]?.paragraphs?.map((p, i) => (
              <p key={i} className="mb-2 text-gray-400">
                {p}
              </p>
            ))}
          </div>

          {/* Examples */}
          {visibleData[activeTab]?.examples?.map((ex, i) => (
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
            {visibleData[activeTab]?.paragraphs2?.map((p, i) => (
              <p key={i} className="mb-2 text-gray-400">
                {p}
              </p>
            ))}
          </div>

          {/* example 2 */}
          {visibleData[activeTab]?.examples2?.map((ex, i) => (
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

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => {
            setPage((p) => {
              return p - 1;
            });
            setActiveTab(0); // নতুন পেজ এলে প্রথম ট্যাব সিলেক্ট
          }}
          disabled={page === 0}
          className={`px-4 py-2 rounded bg-gray-500 text-white ${
            page === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Prev
        </button>

        <button
          onClick={() => {
            setPage((p) => p + 1);
            setActiveTab(0); // নতুন পেজ এলে প্রথম ট্যাব সিলেক্ট
          }}
          disabled={page === totalPages - 1}
          className={`px-4 py-2 rounded bg-green-500 text-black ${
            page === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          More-Article
        </button>
      </div>
    </div>
  );
};

export default TabsDesign;
