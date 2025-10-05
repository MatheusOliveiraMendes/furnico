import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ibuk Sukijan',
    role: 'Ibu Rumah Tangga',
    quote:
      '"Makasih Furnico, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah."',
    avatar: '/Avatar1.jpg',
    background: '/Bg1.jpg',
  },
  {
    id: 2,
    name: 'Nadia Putri',
    role: 'Interior Designer',
    quote:
      '"Setiap detail furnitur mereka terasa premium. Para klienku puas karena ruangannya jadi lebih hangat dan elegan."',
    avatar: '/Avatar2.jpg',
    background: '/Bg2.jpg',
  },
  {
    id: 3,
    name: 'Farhan Malik',
    role: 'Arsitek',
    quote:
      '"Desainnya minimalis, finishing rapi, dan pengiriman cepat. Furnico selalu jadi pilihan pertama untuk proyekku."',
    avatar: '/Avatar3.jpg',
    background: '/Bg3.jpg',
  },
];

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
        <div className="grid grid-cols-3 gap-8 px-4 max-xl:grid-cols-2 max-lg:grid-cols-1 max-lg:px-0">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-[28px] shadow-[0_25px_60px_rgba(15,15,15,0.12)] transition-transform duration-300 hover:-translate-y-2 max-lg:min-h-[440px]"
            >
              <img
                src={testimonial.background}
                alt={`Ambiente decorado de ${testimonial.name}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/30" />
              <div className="relative flex flex-1 flex-col justify-end pb-6">
                <div className="relative mx-8 rounded-t-[26px] border border-white/60 bg-white px-8 pb-10 pt-14 text-center text-[rgba(30,30,30,1)] shadow-[0_12px_35px_rgba(12,12,12,0.12)] max-lg:mx-6 max-lg:px-7 max-lg:pb-8 max-lg:pt-12">
                  <div className="absolute -top-[42px] left-1/2 flex h-[88px] w-[88px] -translate-x-1/2 items-center justify-center rounded-full border-[6px] border-white bg-white">
                    <img
                      src={testimonial.avatar}
                      alt={`Foto de ${testimonial.name}`}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[3.15px] text-[rgba(229,132,17,1)]">
                    {testimonial.role}
                  </p>
                  <blockquote className="mt-5 text-sm leading-relaxed text-[rgba(60,60,60,1)]">
                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-6 flex justify-center gap-1 text-[rgba(255,172,37,1)] max-lg:mt-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="sr-only">Avaliação cinco estrelas</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
