import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="relative bg-[rgba(255,255,255,0.15)] border flex w-[344px] max-w-full items-center gap-[40px_100px] justify-between mt-[45px] pl-5 pr-2 py-2 rounded-[42px] border-[rgba(255,255,255,0.6)] border-solid max-md:mt-10">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search furniture"
        className="text-white text-lg font-normal text-center self-stretch w-[130px] my-auto bg-transparent border-none outline-none placeholder-white"
        aria-label="Search furniture"
      />
      <button
        type="submit"
        className="bg-[rgba(229,132,17,1)] self-stretch flex items-center gap-2.5 w-10 h-10 my-auto p-[11px] rounded-3xl hover:bg-orange-600 transition-colors"
        aria-label="Search"
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/ec2e6930be6a46b0b25064e432b39747690d44b6?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[18px]"
          alt="Search icon"
        />
      </button>
    </form>
  );
};

export default SearchBar;