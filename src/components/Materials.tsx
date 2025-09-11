import React from 'react';

const Materials: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center mt-[270px] pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="self-stretch w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[44%] max-md:w-full max-md:ml-0">
            <article className="flex w-full flex-col self-stretch text-lg text-[rgba(229,132,17,1)] font-normal my-auto max-md:max-w-full max-md:mt-10">
              <span className="tracking-[3.15px] uppercase">Materials</span>
              <h2 className="text-[rgba(30,30,30,1)] text-[42px] w-[413px] mt-5">
                Very serious materials for making furniture
              </h2>
              <p className="text-[rgba(30,30,30,1)] leading-[33px] self-stretch mt-5 max-md:max-w-full">
                Because panto was very serious about designing furniture for
                our environment, using a very expensive and famous capital but
                at a relatively low price
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
          <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[33%] max-md:w-full max-md:ml-0">
                  <div className="grow max-md:mt-10">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/3dec6e86129a79f37e415d5b9b13c49717dae664?placeholderIfAbsent=true"
                      className="aspect-[0.97] object-contain w-full rounded-[14px]"
                      alt="Material sample 1"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/d0f7ed4ff014e60aedda668e4d1d75a65c531b22?placeholderIfAbsent=true"
                      className="aspect-[0.7] object-contain w-full mt-[47px] rounded-[14px] max-md:mt-10"
                      alt="Material sample 2"
                    />
                  </div>
                </div>
                <div className="w-[67%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/cc79768400fd502994ae157670f16034ab10f169?placeholderIfAbsent=true"
                    className="aspect-[0.87] object-contain w-full mt-[73px] rounded-[20px] max-md:max-w-full max-md:mt-10"
                    alt="Material showcase"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
