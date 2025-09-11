import React, { useState } from 'react';

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Chair');
  const tabs = ['Chair', 'Beds', 'Sofa', 'Lamp'];

  return (
    <div className="bg-[rgba(238,238,238,1)] flex whitespace-nowrap leading-[33px] mt-8 p-1.5 rounded-[44px]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex min-h-[45px] items-center gap-2.5 justify-center w-[84px] px-1 py-[7px] rounded-[32px] transition-colors ${
            activeTab === tab ? 'bg-white' : 'hover:bg-gray-200'
          }`}
          aria-pressed={activeTab === tab}
        >
          <span className="self-stretch my-auto">{tab}</span>
        </button>
      ))}
    </div>
  );
};

export default ProductTabs;