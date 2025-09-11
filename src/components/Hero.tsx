import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  return (
    <header className="flex flex-col relative min-h-[1084px] w-full items-center pt-10 pb-[361px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/99130f821df02dca03face9cda3a9d545eafa657?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero background"
      />
      <Navigation />
      <h1 className="relative text-white text-[80px] font-normal leading-[104px] tracking-[-0.8px] text-center mt-[86px] max-md:max-w-full max-md:text-[40px] max-md:leading-[58px] max-md:mt-10">
        Make your interior more
        <br />
        minimalistic & modern
      </h1>
      <p className="relative text-white text-2xl font-normal leading-[38px] text-center w-[606px] mt-3.5 max-md:max-w-full">
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>
      <SearchBar />
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/a45f56e8992f8738ad0d7003c68720b964cbda17?placeholderIfAbsent=true"
        className="aspect-[0.81] object-contain w-28 mb-[-72px] max-w-full ml-[169px] mt-[25px] rounded-[0px_0px_0px_0px] max-md:ml-2.5 max-md:mb-2.5"
        alt="Decorative element"
      />
    </header>
  );
};

export default Hero;