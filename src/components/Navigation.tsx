
const Navigation: React.FC = () => {

  return (
    <nav className="relative self-stretch flex w-full gap-5 text-white font-normal flex-wrap justify-between max-md:max-w-full">
      <div className="text-[28px] tracking-[0.28px] self-stretch">
        Panto
      </div>
      <div className="flex items-stretch gap-[40px_60px] text-lg max-md:max-w-full">
        <div className="flex items-center gap-2 whitespace-nowrap justify-center">
          <div className="self-stretch my-auto">
            Furniture
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/c38ce51343e78b2cdd750045e1f2182870e3a16d?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
            alt="Dropdown arrow"
          />
        </div>
        <div>Shop</div>
        <div>About Us</div>
        <div>Contact</div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/aa8eac5004f9a58b58f5baf8835be4db723f0d3b?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[34px] shrink-0"
        alt="Menu"
      />
    </nav>
  );
};

export default Navigation;
