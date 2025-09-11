import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article className="flex w-full flex-col text-[rgba(30,30,30,1)] font-normal max-md:mt-7">
      <h3 className="text-2xl">{title}</h3>
      <p className="text-base leading-[30px] self-stretch mt-5">
        {description}
      </p>
      <div className="flex items-stretch gap-[13px] text-sm text-[rgba(229,132,17,1)] leading-[26px] mt-3.5">
        <span>More Info</span>
        <img
          src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/3dd40369f97f58291ce9e3285dd578e159e13c54?placeholderIfAbsent=true"
          className="aspect-[2] object-contain w-12 shrink-0"
          alt="Arrow"
        />
      </div>
    </article>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Luxury facilities",
      description: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
    },
    {
      title: "Affordable Price",
      description: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
    },
    {
      title: "Many Choices",
      description: "We provide many unique work space choices so that you can choose the workspace to your liking."
    }
  ];

  return (
    <section className="self-center w-full max-w-screen-xl mt-[120px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[21%] max-md:w-full max-md:ml-0">
          <h2 className="text-[rgba(30,30,30,1)] text-[42px] font-normal self-stretch my-auto max-md:mt-10">
            Why
            <br />
            Choosing Us
          </h2>
        </div>
        <div className="w-[79%] ml-5 max-md:w-full max-md:ml-0">
          <div className="grow max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              {features.map((feature, index) => (
                <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
                  <FeatureCard title={feature.title} description={feature.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;