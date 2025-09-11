import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="w-full max-w-[1299px] mt-60 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[54%] max-md:w-full max-md:ml-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/7434e3a8d0fc42540d5930584483ac0c6f347b30?placeholderIfAbsent=true"
            className="aspect-[1.3] object-contain w-full grow rounded-[20px] max-md:max-w-full max-md:mt-10"
            alt="Interior design experience showcase"
          />
        </div>
        <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
          <article className="flex w-full flex-col self-stretch text-lg text-[rgba(229,132,17,1)] font-normal my-auto max-md:max-w-full max-md:mt-10">
            <span className="tracking-[3.15px] uppercase">experiences</span>
            <h2 className="text-[rgba(30,30,30,1)] text-[42px] w-[413px] mt-5">
              we provide you the best experience
            </h2>
            <p className="text-[rgba(30,30,30,1)] leading-[33px] self-stretch mt-5 max-md:max-w-full">
              You don't have to worry about the result because all of these
              interiors are made by people who are professionals in their
              fields with an elegant and lucurious style and with premium
              quality materials
            </p>
            <div className="flex items-stretch gap-[13px] text-sm leading-[26px] mt-6">
              <span>More Info</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/4990a34d07abc7a58cc2112f9d5bf270a3d72c3e?placeholderIfAbsent=true"
                className="aspect-[2] object-contain w-12 shrink-0"
                alt="Arrow"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;