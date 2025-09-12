import React from 'react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Services",
      links: ["Email Marketing", "Campaigns", "Branding"]
    },
    {
      title: "Furniture",
      links: ["Beds", "Chair", "All"]
    },
    {
      title: "Follow Us",
      links: ["Facebook", "Twitter", "Instagram"]
    }
  ];

  return (
    <footer className="w-full bg-[#F9FAFB] py-16 px-6 mt-32 max-md:mt-10">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-start gap-10">
        {/* 40% */}
        <div className="flex flex-col" style={{ flexBasis: '40%', maxWidth: '40%' }}>
          <h2 className="text-[#181E4B] text-[36px] font-extrabold mb-4">FurniCo</h2>
          <p className="text-[#5E6282] text-[16px] leading-6 mb-8">
            Book your trip in minute, get full<br />
            control for much longer.
          </p>
        </div>

        {/* 20% cada seção */}
        {footerSections.map((section) => (
          <nav
            key={section.title}
            className="flex flex-col"
            style={{ flexBasis: '10%', maxWidth: '10%' }}
          >
            <h3 className="text-amber-500 text-[20px] mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#5E6282] text-[16px] hover:text-[#181E4B] transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="text-[#5E6282] text-[14px] font-normal mt-16 text-center">
        Copyrights © 2023 FurniCo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
// ...existing code...