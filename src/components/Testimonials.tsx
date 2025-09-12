import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="text-[rgba(229,132,17,1)] text-lg font-normal tracking-[3.15px] text-center uppercase mt-[261px] max-md:mt-10">
        Testimonials
      </div>
      <h2 className="text-[rgba(30,30,30,1)] text-[42px] font-normal text-center mt-5">
        Our Client Reviews
      </h2>
      <div className="self-center w-full max-w-[1237px] mt-[60px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/08a81264b06166447f83385991df07f30c7eb2df?placeholderIfAbsent=true"
              className="aspect-[0.83] object-contain w-full grow rounded-[18px] max-md:mt-[38px]"
              alt="Client testimonial 1"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <article className="flex flex-col relative aspect-[0.777] grow text-[rgba(30,30,30,1)] font-normal text-center pt-[219px] pb-[18px] px-[17px] rounded-[18px] max-md:mt-[38px] max-md:pt-[100px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/4fb466f60c852a8d577a42ac50aa027b81704b7f?placeholderIfAbsent=true"
                className="absolute h-full w-full object-cover inset-0"
                alt="Testimonial background"
              />
              <div className="flex flex-col relative aspect-[1.397] items-center pt-2 pb-[17px] px-[49px] max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/8ad68607921fc8de94663a31b96930107c6c98f2?placeholderIfAbsent=true"
                  className="absolute h-full w-full object-cover inset-0"
                  alt="Testimonial card background"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/d63f687fc60a7f29465ffb39e089026747649fae?placeholderIfAbsent=true"
                  className="aspect-[0.91] object-contain w-[50px]"
                  alt="Client avatar"
                />
                <h3 className="relative text-lg mt-2">Ibuk Sukijan</h3>
                <p className="relative text-xs mt-1.5">Ibu Rumah Tangga</p>
                <blockquote className="relative text-sm self-stretch mt-[22px]">
                  "Makasih Panto, aku sekarang berasa tinggal di apartment
                  karena barang-barang yang terlihat mewah"
                </blockquote>
                <img
                  src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/80526385c02169f9c29c5a46526a6f13f2b04460?placeholderIfAbsent=true"
                  className="aspect-[6.41] object-contain w-[90px] mt-[22px]"
                  alt="Rating stars"
                />
              </div>
            </article>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/39038e807a66d08ce876c8e4df702dc44a348449?placeholderIfAbsent=true"
              className="aspect-[0.83] object-contain w-full grow rounded-[18px] max-md:mt-[38px]"
              alt="Client testimonial 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;